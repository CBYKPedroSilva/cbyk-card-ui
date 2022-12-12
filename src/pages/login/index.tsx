import React from 'react'
import * as yup from 'yup'
import { setLoading } from '@/hooks'
import { useForm } from 'react-hook-form'
import Styles from '@/styles/pages/login'
import Logo from '@/assets/images/logo.png'
import AppHead from '@/components/common/app-head'
import { IAuth } from '@/interfaces/auth.interface'
import { yupResolver } from '@hookform/resolvers/yup'
import AppInput from '@/components/common/form/app-input'
import AppInputPassword from '@/components/common/form/app-input-password'

const Login: React.FC = () => {
    const authForm = yup.object().shape({
        email: yup.string().required('Insira o seu email'),
        password: yup.string().required('Insira a sua senha')
    })

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IAuth>({ resolver: yupResolver(authForm) })

    const handleSubmitForm = async (model: IAuth) => {
        setLoading(true, 'Enviando o seu contato...')

        try {
            console.log('credentials :', model)
            reset()
        } catch (error) {
            console.log('Error :', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <AppHead title="Login" />

            <Styles.Container>
                <Styles.Image src={Logo} alt="Cartão de visitas" />
                <Styles.Title>Cartão de visitas CBYK</Styles.Title>

                <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <AppInput
                        id="email"
                        type="email"
                        label="e-mail"
                        register={register}
                        error={errors.email}
                    />

                    <AppInputPassword
                        id="password"
                        register={register}
                        error={errors.password}
                    />

                    <Styles.Button type="submit">Entrar</Styles.Button>
                </Styles.Form>
            </Styles.Container>
        </>
    )
}

export default Login
