import Styles from './styles'
import React, { InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    type?: string
    label?: string
    error?: FieldError
    register: UseFormRegister<any>
}

const AppInput: React.FC<AppInputProps> = props => {
    const { id, error, type, label, register, ...rest } = props

    return (
        <Styles.Container>
            <Styles.Label>{label || ''}</Styles.Label>
            <Styles.Input
                id={id}
                {...rest}
                {...register(id)}
                type={type || 'text'}
            />
            <Styles.Span>{error?.message}</Styles.Span>
        </Styles.Container>
    )
}

export default AppInput
