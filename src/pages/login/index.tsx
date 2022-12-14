import React from 'react'
import * as yup from 'yup'
import { setLoading } from '@/hooks'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Styles from '@/styles/pages/login'
import AppHead from '@/components/common/app-head'
import { IAuth } from '@/interfaces/auth.interface'
import { yupResolver } from '@hookform/resolvers/yup'
import AppInput from '@/components/common/form/app-input'
import { authActions } from '@/store/reducers/auth.reducer'
import CBYKWhiteLogo from '@/assets/images/cbyk-logo-white.png'
import AppInputPassword from '@/components/common/form/app-input-password'

const Login: React.FC = () => {
    const router = useRouter()
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
            authActions.setToken('Teste')
            authActions.setUser({
                code: 1234,
                id: 'user_id',
                email: model.email
            })

            setTimeout(() => {
                router.push('/')
                reset()
            }, 2000)
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
                <Styles.View>
                    <Styles.Image src={CBYKWhiteLogo} alt="CBYK" />
                    <Styles.Title>Cartão de visitas CBYK</Styles.Title>
                </Styles.View>

                <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <AppInput
                        id="email"
                        type="email"
                        label="e-mail"
                        register={register}
                        error={errors.email}
                        placeholder="email@cbyk.com.br"
                    />

                    <AppInputPassword
                        id="password"
                        register={register}
                        placeholder="******"
                        error={errors.password}
                    />
                </Styles.Form>

                <Styles.View>
                    <Styles.Button type="submit">Entrar</Styles.Button>
                    <Styles.Link onClick={() => router.push('/register')}>
                        Criar conta
                    </Styles.Link>
                </Styles.View>
            </Styles.Container>
        </>
    )
}

export default Login
