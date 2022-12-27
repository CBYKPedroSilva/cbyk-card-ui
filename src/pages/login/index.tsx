import React from 'react'
import * as yup from 'yup'
import Images from '@/assets/images'
import { setLoading } from '@/hooks'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Styles from '@/styles/pages/login'
import AppHead from '@/components/common/app-head'
import { IAuth } from '@/interfaces/auth.interface'
import { decodeJWT } from '@/functions/jwt.function'
import { AuthService } from '@/services/auth.service'
import { yupResolver } from '@hookform/resolvers/yup'
import { AlertService } from '@/services/_alert.service'
import AppInput from '@/components/common/form/app-input'
import { authActions } from '@/store/reducers/auth.reducer'
import { ProfileService } from '@/services/profile.service'
import { profileActions } from '@/store/reducers/profile.reducer'
import AppInputPassword from '@/components/common/form/app-input-password'

const Login: React.FC = () => {
    const router = useRouter()
    const authService = new AuthService()
    const alertService = new AlertService()
    const profileService = new ProfileService()

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
        setLoading(true, 'Realizando login...')

        try {
            const { data } = await authService.login(model)
            await setAuthData(data.access_token)
            await setProfile(model.email)

            router.push('/')
            reset()
        } catch (error) {
            authActions.reset()
            alertService.error('Ocorreu um erro ao realizar login')
        } finally {
            setLoading(false)
        }
    }

    const setAuthData = async (token: string) => {
        authActions.setToken(token)
        const user = await decodeJWT(token)

        authActions.setUser({
            id: user.id,
            code: user.code,
            email: user.email
        })
    }

    const setProfile = async (email: string) => {
        try {
            const { data } = await profileService.getByEmail(email)
            if (!data) throw new Error('Perfil não encontrado')
            else profileActions.setProfile(data)
        } catch (error) {
            throw error
        }
    }

    return (
        <>
            <AppHead title="Login" />

            <Styles.Container>
                <Styles.View>
                    <Styles.ImageContainer>
                        <Images.CBYKLogoWhite />
                    </Styles.ImageContainer>

                    <Styles.Title>Cartão de visitas CBYK</Styles.Title>
                </Styles.View>

                <Styles.Form
                    id="register-form"
                    onSubmit={handleSubmit(handleSubmitForm)}
                >
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
                    <Styles.Button form="register-form" type="submit">
                        Entrar
                    </Styles.Button>
                    <Styles.Link onClick={() => router.push('/register')}>
                        Criar conta
                    </Styles.Link>
                </Styles.View>
            </Styles.Container>
        </>
    )
}

export default Login
