import Styles from './styles'
import { ImAttachment } from 'react-icons/im'
import React, { useState, InputHTMLAttributes, useEffect } from 'react'

interface AppInputFileProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    text?: string
    label?: string
    error?: string
    setModel?: React.Dispatch<React.SetStateAction<FileList | never[]>>
}

const AppInputFile: React.FC<AppInputFileProps> = props => {
    const { id, text, error, label, setModel, ...rest } = props

    const defaultText = 'Insira o arquivo'
    const [textValue, setTextValue] = useState(defaultText)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files || []

        if (!files.length) {
            setTextValue(defaultText)
            return
        }

        const filesName = Array.from(files)
            .map(({ name }) => name)
            .join()

        setTextValue(filesName)

        if (setModel) setModel(files)
    }

    useEffect(() => {
        if (text) setTextValue(text)
        else setTextValue(defaultText)
    }, [text])

    return (
        <Styles.Wrapper>
            <Styles.Label>{label || 'Arquivo'}</Styles.Label>

            <Styles.Container>
                <Styles.LabelButton htmlFor={`input-file-${id}`}>
                    <Styles.Text>{textValue}</Styles.Text>
                    <ImAttachment />
                </Styles.LabelButton>

                <Styles.Input
                    id={`input-file-${id}`}
                    onChange={handleChange}
                    type="file"
                    {...rest}
                />
            </Styles.Container>

            <Styles.Span>{error}</Styles.Span>
        </Styles.Wrapper>
    )
}

export default AppInputFile
