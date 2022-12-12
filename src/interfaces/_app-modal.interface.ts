import { ReactNode } from 'react'

export interface AppModalInterface {
    width?: number | string
    height?: number | string
    maxWidth?: number | string
    maxHeight?: number | string
    isOpen: boolean
    header?: JSX.Element
    footer?: JSX.Element
    onClickClose?: Function
    onBackdropClick?: Function
    onClose?: Function
    children?: ReactNode
    containerStyle?: any
    color?: string
}
