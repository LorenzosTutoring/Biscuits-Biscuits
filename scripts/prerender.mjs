import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.resolve(__dirname, '..', 'dist')

const routes = ['/', '/orders', '/subscribe', '/merch', '/about', '/menu']

function stripDefaultSeoTags(html) {
  return html
    .replace(/\s*<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+name="description"[^>]*>/i, '')
}

function buildHtml(template, appHtml, headTags) {
  const withoutDefaultSeo = stripDefaultSeoTags(template)
  return withoutDefaultSeo
    .replace('</head>', `${headTags}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

async function writeRouteHtml(routePath, html) {
  if (routePath === '/') {
    await fs.writeFile(path.join(distDir, 'index.html'), html, 'utf8')
    return
  }

  const routeDir = path.join(distDir, routePath.replace(/^\//, ''))
  await fs.mkdir(routeDir, { recursive: true })
  await fs.writeFile(path.join(routeDir, 'index.html'), html, 'utf8')
}

async function prerender() {
  const templatePath = path.join(distDir, 'index.html')
  const template = await fs.readFile(templatePath, 'utf8')

  const serverEntryPath = path.join(distDir, 'server', 'entry-server.js')
  const { render } = await import(pathToFileURL(serverEntryPath).href)

  for (const routePath of routes) {
    const { appHtml, headTags } = render(routePath)
    const html = buildHtml(template, appHtml, headTags)
    await writeRouteHtml(routePath, html)
  }
}

await prerender()
