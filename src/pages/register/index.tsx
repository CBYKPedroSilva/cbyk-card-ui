import * as yup from 'yup'
import Images from '@/assets/images'
import { setLoading } from '@/hooks'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Styles from '@/styles/pages/register'
import { RiArrowLeftFill } from 'react-icons/ri'
import AppHead from '@/components/common/app-head'
import { yupResolver } from '@hookform/resolvers/yup'
import { ImageService } from '@/services/image.service'
import { AlertService } from '@/services/_alert.service'
import AppInput from '@/components/common/form/app-input'
import { ProfileService } from '@/services/profile.service'
import { IProfileRegister } from '@/interfaces/profile.interface'
import AppInputFile from '@/components/common/form/app-input-file'

const Register: React.FC = () => {
    const router = useRouter()
    const imageService = new ImageService()
    const alertService = new AlertService()
    const profileService = new ProfileService()

    const [imageModel, setImageModel] = useState<FileList | never[]>([])

    const registerForm = yup.object().shape({
        websiteUrl: yup.string(),
        linkedinUrl: yup.string(),
        name: yup.string().required('Insira o seu nome'),
        role: yup.string().required('Insira o seu email'),
        email: yup.string().required('Insira o seu email'),
        password: yup.string().required('Insira uma senha'),
        surname: yup.string().required('Insira o seu sobrenome'),
        mobileNumber: yup.string().required('Insira o seu telefone'),
        whatsAppNumber: yup.string().required('Insira o seu whatsApp')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IProfileRegister>({ resolver: yupResolver(registerForm) })

    const handleSubmitForm = async (model: IProfileRegister) => {
        setLoading(true, 'Criando perfil')

        try {
            let profileAvatar = ''
            const file = imageModel[0]
            if (file) profileAvatar = await createImage(file)

            const createDTO = { ...model, profileAvatar }
            createDTO.mobileNumber = Number(createDTO.mobileNumber)
            createDTO.whatsAppNumber = Number(createDTO.whatsAppNumber)

            await createProfile(createDTO)
            alertService.success('Perfil cadastrado com sucesso')

            router.push('/login')
        } catch (error) {
            alertService.error('Ocorreu um erro ao cadastrar perfil')
        } finally {
            setLoading(false)
        }
    }

    const createImage = async (file: File) => {
        try {
            const {
                data: { data }
            } = await imageService.upload(file, file.name)
            return data.image.url
        } catch (error) {
            throw new Error('Erro ao fazer upload de imagem')
        }
    }

    const createProfile = async (model: IProfileRegister) => {
        try {
            await profileService.create(model)
        } catch (error) {
            throw new Error('Erro ao criar perfil')
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
                        <Styles.ImageContainer>
                            <Images.CBYKLogoWhite />
                        </Styles.ImageContainer>

                        <Styles.Title>Cadastro</Styles.Title>
                    </Styles.View>
                </Styles.Header>

                <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
                    <AppInputFile
                        id="photo"
                        label="Foto"
                        multiple={false}
                        setModel={setImageModel}
                        text="Faça upload de uma foto"
                    />

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

                    <AppInput
                        id="password"
                        label="Senha"
                        type="password"
                        register={register}
                        error={errors.password}
                        placeholder="Digite uma senha"
                    />
                    <Styles.Button type="submit">Criar</Styles.Button>
                </Styles.Form>
            </Styles.Container>
        </>
    )
}

export default Register
