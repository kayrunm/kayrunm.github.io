module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        content: [
            'docs/index.html',
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                'sans': [
                    'Quicksand',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"'
                ],
                'serif': [
                    '"DM Serif Display"',
                    'Georgia',
                    'Cambria',
                    '"Times New Roman"',
                    'Times',
                    'serif'
                ],
            },
            fontSize: {
                '7xl': '5rem',
                '8xl': '6rem',
            }
        },
    },
    variants: {},
    plugins: [],
}
