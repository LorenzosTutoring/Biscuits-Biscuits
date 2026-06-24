import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Biscuits-Biscuits'

export default function Seo({
    title,
    description,
    path = '/',
    image = '/favicon.svg',
}) {
    const fullTitle = `${title} | ${SITE_NAME}`
    const canonicalUrl = `https://biscuits-biscuits-20260624.netlify.app${path}`

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={image} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    )
}
