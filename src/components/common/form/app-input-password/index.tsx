import Styles from './styles'
import React, { useState, InputHTMLAttributes } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface AppInputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    label?: string
    error?: FieldError
    register: UseFormRegister<any>
}

const AppInputPassword: React.FC<AppInputPasswordProps> = props => {
    const { id, error, label, register, ...rest } = props
    const [isShow, setIsShow] = useState(false)

    return (
        <Styles.Wrapper>
            <Styles.Label>{label || 'senha'}</Styles.Label>
            <Styles.Container>
                <Styles.Input
                    id={id}
                    {...rest}
                    {...register(id)}
                    type={isShow ? 'text' : 'password'}
                />
                <Styles.Button type="button" onClick={() => setIsShow(!isShow)}>
                    {isShow ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </Styles.Button>
            </Styles.Container>

            <Styles.Span>{error?.message}</Styles.Span>
        </Styles.Wrapper>
    )
}

export default AppInputPassword
