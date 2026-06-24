import { createTheme, responsiveFontSizes } from '@mui/material/styles'

// ─── Artisanal Warmth — Design Tokens ────────────────────────────────────────

export const colors = {
    surface: '#fff8f4',
    surfaceDim: '#efd6bc',
    surfaceBright: '#fff8f4',
    surfaceContainerLowest: '#ffffff',
    surfaceContainerLow: '#fff1e5',
    surfaceContainer: '#ffebd6',
    surfaceContainerHigh: '#fde4ca',
    surfaceContainerHighest: '#f7dec4',
    onSurface: '#261909',
    onSurfaceVariant: '#504538',
    inverseSurface: '#3c2e1c',
    inverseOnSurface: '#ffeede',
    outline: '#837567',
    outlineVariant: '#d5c4b3',
    surfaceTint: '#835412',
    primary: '#835412',
    onPrimary: '#ffffff',
    primaryContainer: '#c48c46',
    onPrimaryContainer: '#462900',
    inversePrimary: '#f9bb70',
    secondary: '#615e54',
    onSecondary: '#ffffff',
    secondaryContainer: '#e8e2d4',
    onSecondaryContainer: '#686459',
    tertiary: '#53634d',
    onTertiary: '#ffffff',
    tertiaryContainer: '#8b9c83',
    onTertiaryContainer: '#243321',
    error: '#ba1a1a',
    onError: '#ffffff',
    errorContainer: '#ffdad6',
    onErrorContainer: '#93000a',
    primaryFixed: '#ffddb9',
    primaryFixedDim: '#f9bb70',
    onPrimaryFixed: '#2b1700',
    onPrimaryFixedVariant: '#663e00',
    secondaryFixed: '#e8e2d4',
    secondaryFixedDim: '#cbc6b9',
    onSecondaryFixed: '#1d1c13',
    onSecondaryFixedVariant: '#49473d',
    tertiaryFixed: '#d6e8cc',
    tertiaryFixedDim: '#baccb1',
    onTertiaryFixed: '#111f0e',
    onTertiaryFixedVariant: '#3b4b37',
    background: '#fff8f4',
    onBackground: '#261909',
    surfaceVariant: '#f7dec4',
}

export const fontFamilies = {
    display: '"Literata", Georgia, "Times New Roman", serif',
    body: '"Plus Jakarta Sans", system-ui, sans-serif',
}

export const spacing = {
    base: 8,
    containerMax: 1280,
    gutter: 24,
    marginDesktop: 64,
    marginMobile: 20,
}

// ─── MUI Theme ────────────────────────────────────────────────────────────────

const baseTheme = createTheme({
    // Palette
    palette: {
        mode: 'light',
        background: {
            default: colors.background,
            paper: colors.surfaceContainerLow,
        },
        primary: {
            main: colors.primary,
            contrastText: colors.onPrimary,
            light: colors.primaryFixedDim,
            dark: colors.onPrimaryContainer,
        },
        secondary: {
            main: colors.secondary,
            contrastText: colors.onSecondary,
            light: colors.secondaryFixed,
            dark: colors.onSecondaryFixedVariant,
        },
        tertiary: {
            main: colors.tertiary,
            contrastText: colors.onTertiary,
            light: colors.tertiaryFixed,
            dark: colors.onTertiaryFixedVariant,
        },
        error: {
            main: colors.error,
            contrastText: colors.onError,
            light: colors.errorContainer,
            dark: colors.onErrorContainer,
        },
        text: {
            primary: colors.onBackground,
            secondary: colors.onSurfaceVariant,
            disabled: colors.outline,
        },
        divider: colors.outlineVariant,
    },

    // Typography — Literata headings, Plus Jakarta Sans body
    typography: {
        fontFamily: fontFamilies.body,

        h1: {
            fontFamily: fontFamilies.display,
            fontSize: '3rem',       // 48px
            fontWeight: 700,
            lineHeight: '3.5rem',   // 56px
            letterSpacing: '-0.02em',
        },
        h2: {
            fontFamily: fontFamilies.display,
            fontSize: '2rem',       // 32px
            fontWeight: 600,
            lineHeight: '2.5rem',   // 40px
        },
        h3: {
            fontFamily: fontFamilies.display,
            fontSize: '1.5rem',     // 24px
            fontWeight: 600,
            lineHeight: '2rem',     // 32px
        },
        h4: {
            fontFamily: fontFamilies.display,
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: '1.75rem',
        },
        h5: {
            fontFamily: fontFamilies.display,
            fontSize: '1.125rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
        },
        h6: {
            fontFamily: fontFamilies.display,
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: '1.375rem',
        },
        body1: {
            fontFamily: fontFamilies.body,
            fontSize: '1.125rem',   // 18px body-lg
            fontWeight: 400,
            lineHeight: '1.75rem',  // 28px
        },
        body2: {
            fontFamily: fontFamilies.body,
            fontSize: '1rem',       // 16px body-md
            fontWeight: 400,
            lineHeight: '1.5rem',   // 24px
        },
        button: {
            fontFamily: fontFamilies.body,
            fontSize: '0.875rem',   // 14px label-md
            fontWeight: 600,
            lineHeight: '1.25rem',  // 20px
            letterSpacing: '0.05em',
            textTransform: 'none',
        },
        caption: {
            fontFamily: fontFamilies.body,
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: '1rem',
        },
        overline: {
            fontFamily: fontFamilies.body,
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
        },
    },

    // Shape — rounded, artisanal
    shape: {
        borderRadius: 8,   // 0.5rem DEFAULT
    },

    // Spacing — 8px base unit
    spacing: spacing.base,

    // Shadows — warm-tinted, soft ambient
    shadows: [
        'none',
        '0 1px 3px rgba(131,84,18,0.08)',
        '0 2px 6px rgba(131,84,18,0.10)',
        '0 4px 12px rgba(131,84,18,0.12)',
        '0 6px 18px rgba(131,84,18,0.14)',
        '0 8px 24px rgba(131,84,18,0.16)',
        '0 12px 32px rgba(131,84,18,0.18)',
        '0 16px 40px rgba(131,84,18,0.20)',
        '0 20px 48px rgba(131,84,18,0.22)',
        '0 24px 56px rgba(131,84,18,0.24)',
        '0 28px 64px rgba(131,84,18,0.26)',
        '0 32px 72px rgba(131,84,18,0.28)',
        '0 36px 80px rgba(131,84,18,0.30)',
        '0 40px 88px rgba(131,84,18,0.32)',
        '0 44px 96px rgba(131,84,18,0.34)',
        '0 48px 104px rgba(131,84,18,0.36)',
        '0 52px 112px rgba(131,84,18,0.38)',
        '0 56px 120px rgba(131,84,18,0.40)',
        '0 60px 128px rgba(131,84,18,0.42)',
        '0 64px 136px rgba(131,84,18,0.44)',
        '0 68px 144px rgba(131,84,18,0.46)',
        '0 72px 152px rgba(131,84,18,0.48)',
        '0 76px 160px rgba(131,84,18,0.50)',
        '0 80px 168px rgba(131,84,18,0.52)',
        '0 84px 176px rgba(131,84,18,0.54)',
    ],

    // Component overrides
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: colors.background,
                    color: colors.onBackground,
                },
            },
        },

        // AppBar — warm surface
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: colors.surfaceContainerLow,
                    color: colors.onSurface,
                    borderBottom: `1px solid ${colors.outlineVariant}`,
                },
            },
        },

        // Buttons — golden brown primary, rounded mandatory
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    fontFamily: fontFamilies.body,
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'none',
                    boxShadow: 'none',
                    '&:hover': { boxShadow: '0 4px 12px rgba(131,84,18,0.20)' },
                },
                containedPrimary: {
                    backgroundColor: colors.primary,
                    color: colors.onPrimary,
                    '&:hover': { backgroundColor: colors.onPrimaryContainer },
                },
                outlinedPrimary: {
                    borderColor: colors.primary,
                    color: colors.primary,
                    '&:hover': {
                        backgroundColor: colors.surfaceContainerLow,
                        borderColor: colors.onPrimaryContainer,
                    },
                },
            },
        },

        // Cards — xl radius, light-toast border
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 24,   // rounded-xl = 1.5rem
                    border: `1px solid ${colors.outlineVariant}`,
                    backgroundColor: colors.surfaceContainerLow,
                    boxShadow: '0 2px 6px rgba(131,84,18,0.10)',
                },
            },
        },

        // Paper — warm tonal layering, avoid floaty white
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    backgroundColor: colors.surfaceContainerLow,
                    borderRadius: 12,
                },
            },
        },

        // Chips — sage green for organic/dietary tags
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 9999,  // full pill
                    fontFamily: fontFamilies.body,
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    letterSpacing: '0.05em',
                },
                colorSecondary: {
                    backgroundColor: colors.tertiaryFixed,
                    color: colors.onTertiaryFixedVariant,
                },
            },
        },

        // Input fields — buttery cream fill, golden brown focus
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    backgroundColor: colors.surfaceContainerLowest,
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.primary,
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.primary,
                        borderWidth: 2,
                    },
                },
                notchedOutline: {
                    borderColor: colors.outline,
                },
            },
        },

        // Divider — low-contrast butter shade
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: colors.outlineVariant,
                },
            },
        },

        // Drawer
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: colors.surfaceContainerLow,
                    borderRight: `1px solid ${colors.outlineVariant}`,
                },
            },
        },
    },
})

const theme = responsiveFontSizes(baseTheme, { breakpoints: ['sm', 'md', 'lg'] })

export default theme
