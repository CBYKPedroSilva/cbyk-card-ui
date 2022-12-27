import * as yup from 'yup'
import Images from '@/assets/images'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMask } from '@/hooks/mask.hook'
import Styles from '@/styles/pages/register'
import { RiArrowLeftFill } from 'react-icons/ri'
import React, { useEffect, useState } from 'react'
import { setLoading, useMapState } from '@/hooks'
import AppHead from '@/components/common/app-head'
import { yupResolver } from '@hookform/resolvers/yup'
import { ImageService } from '@/services/image.service'
import { AlertService } from '@/services/_alert.service'
import AppInput from '@/components/common/form/app-input'
import { IProfile } from '@/interfaces/profile.interface'
import { ProfileService } from '@/services/profile.service'
import { profileActions } from '@/store/reducers/profile.reducer'
import AppInputFile from '@/components/common/form/app-input-file'
import { IProfileStore } from '@/store/@interfaces/profile.interface'
import ModalCropper from '@/components/common/modal-cropper'

const RegisterProfile: React.FC = () => {
    const router = useRouter()
    const imageService = new ImageService()
    const alertService = new AlertService()
    const profileService = new ProfileService()
    const phoneNumberMask = useMask('phoneNumber')
    const { profile } = useMapState('profile') as IProfileStore

    const [imageResult, setImageResult] = useState<File>()
    const [imageCropper, setImageCropper] = useState<File>()
    const [showModalCropper, setShowModalCropper] = useState(false)
    const [imageModel, setImageModel] = useState<FileList | never[]>([])

    const profileForm = yup.object().shape({
        websiteUrl: yup.string(),
        linkedinUrl: yup.string(),
        mobileNumber: yup.string(),
        whatsAppNumber: yup.string(),
        name: yup.string().required('Insira o seu nome'),
        role: yup.string().required('Insira o seu email'),
        email: yup.string().required('Insira o seu email'),
        surname: yup.string().required('Insira o seu sobrenome')
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

    useEffect(() => {
        const file = imageModel[0]

        if (file) setImageCropper(file)
        setShowModalCropper(!!file)
    }, [imageModel])

    const getProfile = async () => {
        try {
            const { data } = await profileService.getById(profile._id)

            const mobileNumber = phoneNumberMask.getFormatValue(
                String(data.mobileNumber)
            )

            const whatsAppNumber = phoneNumberMask.getFormatValue(
                String(data.whatsAppNumber)
            )

            setValue('name', data.name)
            setValue('role', data.role)
            setValue('email', data.email)
            setValue('surname', data.surname)
            setValue('websiteUrl', data.websiteUrl)
            setValue('linkedinUrl', data.linkedinUrl)
            setValue('mobileNumber', mobileNumber)
            setValue('whatsAppNumber', whatsAppNumber)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitForm = async (model: IProfile) => {
        setLoading(true, 'Criando perfil')

        try {
            let profileAvatar = profile.profileAvatar
            if (imageResult) profileAvatar = await createImage(imageResult)

            const createDTO = { ...model, profileAvatar }

            const rawMobileNumber = phoneNumberMask.getRawValue(
                String(createDTO.mobileNumber)
            )

            const rawWhatsAppNumber = phoneNumberMask.getRawValue(
                String(createDTO.whatsAppNumber)
            )

            createDTO.mobileNumber = Number(rawMobileNumber)
            createDTO.whatsAppNumber = Number(rawWhatsAppNumber)

            await updateProfile(createDTO)
            profileActions.setProfile({ ...profile, ...createDTO })
            alertService.success('Perfil atualizado com sucesso')

            router.push('/')
        } catch (error) {
            alertService.error('Ocorreu um erro ao atualizar perfil')
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
            } = await imageService.upload(file, file.name)
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

    const onSubmitCroppie = (result: File) => {
        setImageResult(result)
        setShowModalCropper(false)
    }

    return (
        <>
            <AppHead title="Atualizar Perfil" />

            <Styles.Container>
                <Styles.Header>
                    <Styles.BackButton onClick={() => router.push('/')}>
                        <RiArrowLeftFill />
                    </Styles.BackButton>

                    <Styles.View>
                        <Styles.ImageContainer>
                            <Images.CBYKLogoWhite />
                        </Styles.ImageContainer>

                        <Styles.Title>Atualizar Perfil</Styles.Title>
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
                        {...phoneNumberMask.directive}
                    />

                    <AppInput
                        id="mobileNumber"
                        label="Telefone"
                        register={register}
                        error={errors.mobileNumber}
                        placeholder="(00) 00000-0000"
                        {...phoneNumberMask.directive}
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

            <ModalCropper
                file={imageCropper}
                isOpen={showModalCropper}
                onSubmit={onSubmitCroppie}
                onBackdropClick={() => setShowModalCropper(false)}
            />
        </>
    )
}

export default RegisterProfile
