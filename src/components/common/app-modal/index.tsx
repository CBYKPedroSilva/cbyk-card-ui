import Styles from './styles'
import { MdClose } from 'react-icons/md'
import React, { useEffect, useRef } from 'react'
import { AppModalInterface } from '@/interfaces/_app-modal.interface'

const AppModal: React.FC<AppModalInterface> = props => {
    const backdropEl = useRef(null)
    const {
        color,
        width,
        isOpen,
        height,
        header,
        footer,
        maxWidth,
        children,
        maxHeight,
        onClickClose,
        onBackdropClick,
        containerStyle
    } = props

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    }, [isOpen])

    const handleBackdropClick = (element: EventTarget) => {
        const isBackdrop = element === backdropEl.current
        if (!isBackdrop || !onBackdropClick) return

        onBackdropClick()
    }

    return (
        <>
            {isOpen && (
                <Styles.Backdrop
                    ref={backdropEl}
                    onClick={({ target }) => handleBackdropClick(target)}
                >
                    <Styles.ModalContainer
                        style={{
                            maxWidth,
                            maxHeight,
                            ...containerStyle,
                            width: width || 490,
                            height: height || 'fit-content'
                        }}
                    >
                        {header && (
                            <Styles.ModalHeader>{header}</Styles.ModalHeader>
                        )}
                        <Styles.ModalBody color={color}>
                            {children}
                        </Styles.ModalBody>
                        {footer && (
                            <Styles.ModalFooter>{footer}</Styles.ModalFooter>
                        )}
                    </Styles.ModalContainer>

                    {onClickClose && (
                        <Styles.Button
                            color={color}
                            onClick={() => onClickClose()}
                        >
                            Fechar
                            <MdClose />
                        </Styles.Button>
                    )}
                </Styles.Backdrop>
            )}
        </>
    )
}

export default AppModal
