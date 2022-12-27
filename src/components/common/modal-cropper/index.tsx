import 'croppie/croppie.css'
import Styles from './styles'
import Croppie from 'croppie'
import AppModal from '../app-modal'
import React, { useEffect } from 'react'
import { dataUrlToFile, toBase64 } from '@/helpers/file.helper'
import { AppModalInterface } from '@/interfaces/_app-modal.interface'

interface ModalCropperProps extends AppModalInterface {
    file?: File
    onSubmit?: Function
}

const ModalCropper: React.FC<ModalCropperProps> = props => {
    const { isOpen, onBackdropClick, onClose, file, onSubmit } = props

    const [image, setImage] = React.useState('')
    const [croppie, setCroppie] = React.useState<Croppie | null>(null)

    useEffect(() => {
        init()
    }, [file])

    function handleImage(image: string) {
        setImage(image)
        const el = document.getElementById('image-helper')

        if (!el) return

        const croppieInstance = new Croppie(el, {
            enableExif: true,
            viewport: { height: 150, width: 150 },
            boundary: { height: 300, width: 300 }
        })
        croppieInstance.bind({ url: image })
        setCroppie(croppieInstance)
    }

    const init = () => {
        if (!file) return
        toBase64(file).then(fileString => handleImage(String(fileString)))
    }

    const onCrop = () => {
        const fileName = file?.name || 'cropped'
        const options: Croppie.ResultOptions = {
            type: 'base64',
            size: { width: 480, height: 480 }
        }

        croppie?.result(options).then(async result => {
            const file = await dataUrlToFile(String(result), fileName)
            if (onSubmit) onSubmit(file)
        })
    }

    return (
        <AppModal
            width="90vw"
            maxWidth={420}
            isOpen={isOpen}
            maxHeight="80vh"
            onClickClose={onClose}
            onBackdropClick={onBackdropClick}
            footer={<Styles.Button onClick={onCrop}>Finalizar</Styles.Button>}
        >
            <Styles.Container>
                <div id="image-helper"></div>
            </Styles.Container>
        </AppModal>
    )
}

export default ModalCropper
