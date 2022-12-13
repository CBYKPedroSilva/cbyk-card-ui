import React from 'react'
import * as yup from 'yup'
import { setLoading } from '@/hooks'
import { useForm } from 'react-hook-form'
import Logo from '@/assets/images/logo.png'
import Styles from '@/styles/pages/register'
import { RiArrowLeftFill } from 'react-icons/ri'
import AppHead from '@/components/common/app-head'
import { yupResolver } from '@hookform/resolvers/yup'
import { IProfile } from '@/interfaces/profile.interface'
import AppInput from '@/components/common/form/app-input'
import { useRouter } from 'next/router'

const Register: React.FC = () => {
    const router = useRouter()

    const authForm = yup.object().shape({
        websiteUrl: yup.string(),
        linkedinUrl: yup.string(),
        name: yup.string().required('Insira o seu nome'),
        role: yup.string().required('Insira o seu email'),
        email: yup.string().required('Insira o seu email'),
        surname: yup.string().required('Insira o seu sobrenome'),
        mobileNumber: yup.string().required('Insira o seu telefone'),
        whatsAppNumber: yup.string().required('Insira o seu whatsApp')
    })

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IProfile>({ resolver: yupResolver(authForm) })

    const handleSubmitForm = async (model: IProfile) => {
        setLoading(true, 'Enviando o seu contato...')

        try {
            console.log('Model :', model)
        } catch (error) {
            console.log('Error :', error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <AppHead title="Cadastro" />

            <Styles.Container>
                <Styles.Header>
                    <Styles.BackButton onClick={() => router.push('/')}>
                        <RiArrowLeftFill />
                    </Styles.BackButton>

                    <Styles.View>
                        <Styles.Image src={Logo} alt="Cartão de visitas" />
                        <Styles.Title>Cadastro</Styles.Title>
                    </Styles.View>
                </Styles.Header>

                <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <AppInput
                        id="name"
                        label="Nome"
                        register={register}
                        error={errors.name}
                        placeholder="Digite seu nome"
                    />

                    <AppInput
                        id="surname"
                        label="Sobrenome"
                        register={register}
                        error={errors.surname}
                        placeholder="Digite seu sobrenome"
                    />

                    <AppInput
                        id="role"
                        label="Cargo"
                        register={register}
                        error={errors.role}
                        placeholder="Digite seu cargo"
                    />

                    <AppInput
                        label="WhatsApp"
                        id="whatsAppNumber"
                        register={register}
                        error={errors.whatsAppNumber}
                        placeholder="(00) 00000-0000"
                    />

                    <AppInput
                        id="mobileNumber"
                        label="Telefone"
                        register={register}
                        error={errors.mobileNumber}
                        placeholder="(00) 00000-0000"
                    />

                    <AppInput
                        id="email"
                        type="email"
                        label="e-mail"
                        register={register}
                        error={errors.email}
                        placeholder="Digite seu email"
                    />

                    <AppInput
                        id="linkedinUrl"
                        register={register}
                        label="Link LinkedIn"
                        error={errors.linkedinUrl}
                        placeholder="Digite a URL do seui LinkedIn"
                    />
                    <Styles.Button type="submit">Criar</Styles.Button>
                </Styles.Form>
            </Styles.Container>
        </>
    )
}

export default Register
