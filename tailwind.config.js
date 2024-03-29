const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: ["./docs/styles/*.css", "./docs/*.html", "./docs/components/*.js"],
  },
  safelist: ['dark'],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'header-background': "url('../images/Jumbotron.png')",
                'hiding-divider': "url('../images/Hiding.png')",
            }),
            colors: {
                gray: {
                    1000: '#0A0A0A',
                },
            },
            backgroundSize: {
                '200%': '200%',
            },
            keyframes: {
                dropin: {
                    '100%': { transform: 'scale(1)' },
                    '0%': { transform: 'scale(1.1)' },
                },
                'gradient-x': {
                    '0%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '100%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
            },
            animation: {
                dropin: 'dropin 1s ease-out',
                'gradient-x': 'gradient-x 7s ease',
            },
        },
        fontFamily: {
            display: 'Montserrat, sans-serif',
            body: 'Noto Sans, sans-serif',
        },

        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            gray: colors.trueGray,
            red: colors.red,
            amber: colors.amber,
            rose: colors.rose,
            blue: colors.blue,
            cyan: colors.cyan,
            yellow: colors.amber,
            pink: colors.pink,
            orange: colors.orange,
            white: colors.white,
            black: colors.black,
            green: colors.emerald,
        },
    },
    variants: {
        extend: {
            display: ['dark'],
            borderColor: ['dark'],
        },
    },
    plugins: [],
}
