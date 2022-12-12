import 'styled-components'
import theme from '@/styles/css/ts/theme'

export type Theme = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
