const content = [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/styles/**/*.{js,jsx,ts,tsx}'
]

const theme = {
    fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        lg: '1.125rem',
        xl: '2.25rem'
    },
    screens: {
        xs: { max: '475px' },
        sm: { max: '640px' },
        md: { max: '890px' },
        lg: { max: '1024px' },
        xl: { max: '1280px' }
    }
}

module.exports = {
    theme,
    content,
    variants: {},
    plugins: ['macros']
}
