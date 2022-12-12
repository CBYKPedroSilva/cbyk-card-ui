export const THEME_TYPE = {
    dark: 1,
    light: 2
}

export const THEME_DESCRIPTION = {
    [THEME_TYPE.dark]: 'Escuro',
    [THEME_TYPE.light]: 'Claro'
}

export const THEME_ITEMS = Object.entries(THEME_DESCRIPTION).map(
    ([id, label]) => ({ id: Number(id), label })
)
