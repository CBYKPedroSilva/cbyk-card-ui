import { THEME_TYPE } from '@/contants/theme-type'

import lightTheme from './light.theme'
import darkTheme from './dark.theme'

const themes = {
    [THEME_TYPE.dark]: darkTheme,
    [THEME_TYPE.light]: lightTheme
}

export default themes
