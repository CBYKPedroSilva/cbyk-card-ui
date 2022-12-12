import common from './_common'

const spacing = { ...common.spacing }
const colors = { ...common.colors, text: '#FFF' }

const background = {
    bgPrimary: '#101010',
    bgSecondary: '#1C1C1C'
}

const theme = {
    spacing,
    colors: { ...colors, ...background }
}

export default theme
