import common from './_common'

const spacing = { ...common.spacing }
const colors = { ...common.colors, text: '#FFF' }

const background = {
    bgLight: '#E6E6E6',
    bgPrimary: '#161516',
    bgSecondary: '#252A34'
}

const theme = {
    spacing,
    colors: { ...colors, ...background }
}

export default theme
