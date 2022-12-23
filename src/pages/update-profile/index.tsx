import * as yup from 'yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Logo from '@/assets/images/logo.png'
import Styles from '@/styles/pages/register'
import { RiArrowLeftFill } from 'react-icons/ri'
import React, { useEffect, useState } from 'react'
import { setLoading, useMapState } from '@/hooks'
import AppHead from '@/components/common/app-head'
import { yupResolver } from '@hookform/resolvers/yup'
import { ImageService } from '@/services/image.service'
import AppInput from '@/components/common/form/app-input'
import { IProfile } from '@/interfaces/profile.interface'
import { ProfileService } from '@/services/profile.service'
import AppInputFile from '@/components/common/form/app-input-file'
import { IProfileStore } from '@/store/@interfaces/profile.interface'
import { profileActions } from '@/store/reducers/profile.reducer'

const RegisterProfile: React.FC = () => {
    const router = useRouter()
    const imageService = new ImageService()
    const profileService = new ProfileService()

    const { profile } = useMapState('profile') as IProfileStore
    const [imageModel, setImageModel] = useState<FileList | never[]>([])

    const profileForm = yup.object().shape({
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
        setValue,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IProfile>({ resolver: yupResolver(profileForm) })

    useEffect(() => {
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            const { data } = await profileService.getById(profile._id)

            setValue('name', data.name)
            setValue('role', data.role)
            setValue('email', data.email)
            setValue('surname', data.surname)
            setValue('websiteUrl', data.websiteUrl)
            setValue('linkedinUrl', data.linkedinUrl)
            setValue('mobileNumber', data.mobileNumber)
            setValue('whatsAppNumber', data.whatsAppNumber)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitForm = async (model: IProfile) => {
        setLoading(true, 'Criando perfil')

        try {
            const file = imageModel[0]
            let profileAvatar = model.profileAvatar
            if (file) profileAvatar = await createImage(file)

            const createDTO = { ...model, profileAvatar }
            createDTO.mobileNumber = Number(createDTO.mobileNumber)
            createDTO.whatsAppNumber = Number(createDTO.whatsAppNumber)

            await updateProfile(createDTO)
            profileActions.setProfile({ ...profile, ...createDTO })

            router.push('/')
        } catch (error) {
            console.log('Error :', error)
        } finally {
            setLoading(false)
        }
    }

    const createImage = async (file: File) => {
        try {
            setLoading(true, 'Cadastrando imagem')

            const {
                data: { data }
            } = await imageService.upload(file, 'teste')
            return data.image.url
        } catch (error) {
            throw new Error('Erro ao fazer upload de imagem')
        }
    }

    const updateProfile = async (model: IProfile) => {
        try {
            setLoading(true, 'Atualizando Perfil')
            await profileService.update(profile._id, model)
        } catch (error) {
            throw new Error('Erro ao atualizar perfil')
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
                    <Styles.Button type="submit">Salvar</Styles.Button>
                </Styles.Form>
            </Styles.Container>
        </>
    )
}

export default RegisterProfile
