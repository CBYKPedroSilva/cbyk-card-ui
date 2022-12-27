import * as yup from 'yup'
import Images from '@/assets/images'
import { setLoading } from '@/hooks'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMask } from '@/hooks/mask.hook'
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
import { IAuth } from '@/interfaces/auth.interface'
import { AuthService } from '@/services/auth.service'
import { decodeJWT } from '@/functions/jwt.function'
import { authActions } from '@/store/reducers/auth.reducer'
import { profileActions } from '@/store/reducers/profile.reducer'
import ModalCropper from '@/components/common/modal-cropper'

const Register: React.FC = () => {
    const router = useRouter()
    const authService = new AuthService()
    const imageService = new ImageService()
    const alertService = new AlertService()
    const profileService = new ProfileService()
    const phoneNumberMask = useMask('phoneNumber')

    const [imageResult, setImageResult] = useState<File>()
    const [imageCropper, setImageCropper] = useState<File>()
    const [showModalCropper, setShowModalCropper] = useState(false)
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

    useEffect(() => {
        const file = imageModel[0]

        if (file) setImageCropper(file)
        setShowModalCropper(!!file)
    }, [imageModel])

    const handleSubmitForm = async (model: IProfileRegister) => {
        setLoading(true, 'Criando perfil')

        try {
            let profileAvatar = ''
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

            await createProfile(createDTO)
            await handleLogin({
                email: createDTO.email,
                password: createDTO.password
            })

            alertService.success('Perfil cadastrado com sucesso')

            router.push('/')
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
            const { data } = await profileService.create(model)
            profileActions.setProfile(data)
        } catch (error) {
            throw new Error('Erro ao criar perfil')
        }
    }

    const handleLogin = async (model: IAuth) => {
        setLoading(true, 'Realizando login...')

        try {
            const { data } = await authService.login(model)
            const user = await decodeJWT(data.access_token)
            authActions.setToken(data.access_token)

            authActions.setUser({
                id: user.id,
                code: user.code,
                email: user.email
            })
        } catch (error) {
            throw new Error('Ocorreu um erro ao realizar login')
        }
    }

    const onSubmitCroppie = (result: File) => {
        setImageResult(result)
        setShowModalCropper(false)
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

            <ModalCropper
                file={imageCropper}
                isOpen={showModalCropper}
                onSubmit={onSubmitCroppie}
                onBackdropClick={() => setShowModalCropper(false)}
            />
        </>
    )
}

export default Register
