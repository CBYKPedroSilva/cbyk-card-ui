import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import AppHead from '@/components/common/app-head'
import { IAuth } from '@/interfaces/auth.interface'
import { yupResolver } from '@hookform/resolvers/yup'
import {
    Form,
    Span,
    Input,
    Label,
    Button,
    FormGroup,
    Container
} from '@/styles/pages/login'
import { setLoading } from '@/hooks'

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

            <Container>
                <Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormGroup>
                        <Label>e-mail</Label>
                        <Input {...register('email')} type="email" />
                        <Span>{errors.email?.message}</Span>
                    </FormGroup>

                    <FormGroup>
                        <Label>senha</Label>
                        <Input {...register('password')} type="password" />
                        <Span>{errors.password?.message}</Span>
                    </FormGroup>

                    <Button type="submit">Entrar</Button>
                </Form>
            </Container>
        </>
    )
}

export default Login
