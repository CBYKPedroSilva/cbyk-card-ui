import common from './_common'

const spacing = { ...common.spacing }
const colors = { ...common.colors, text: '#0F3460' }

const background = {
    bgPrimary: '#F7F7F7',
    bgSecondary: '#FFFFFF'
}

const theme = {
    spacing,
    colors: { ...colors, ...background }
}

export default theme
