import { setLoading } from '@/hooks'
import Icons from '@/assets/images/icons'
import Styles from '@/styles/pages/profile'
import React, { useEffect, useState } from 'react'
import AppHead from '@/components/common/app-head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IProfile } from '@/interfaces/profile.interface'
import { ProfileService } from '@/services/profile.service'
import { WhatsAppService } from '@/services/_whatsapp.service'
import useWindowDimensions from '@/hooks/window-dimentions.hook'
import UserHeader, { IUserHeaderData } from '@/components/common/user-header'

interface IProfileData {
    headerData: IUserHeaderData
    profile: IProfile
}

interface IProfileProps {
    profileId: string
}

const Profile: React.FC<IProfileProps> = ({ profileId }) => {
    const { freeHeight } = useWindowDimensions()
    const whatsAppService = new WhatsAppService()

    const [errorMessage, setErrorMessage] = useState<string>()
    const [profileData, setProfileData] = useState<IProfileData>(
        {} as IProfileData
    )

    const { headerData, profile } = profileData
    const hasProfile = !!Object.keys(profile || {}).length

    const initialName =
        profile && profile.name ? `${profile.name[0]}${profile.surname[0]}` : ''

    const actions = [
        {
            key: 'whatsAppNumber',
            icon: <Icons.WhatsApp />,
            title: 'WhatsApp',
            action: () =>
                whatsAppService.sendMessage(`55${profile.whatsAppNumber}`, '')
        },
        {
            key: 'mobileNumber',
            icon: <Icons.Phone />,
            title: 'Celular',
            action: () => open(`tel:0${profile.mobileNumber}`)
        },
        {
            key: 'email',
            icon: <Icons.Mail />,
            title: 'E-mail',
            action: () => open(`mailto:${profile.email}`)
        },
        {
            key: 'linkedinUrl',
            icon: <Icons.Linkedin />,
            title: 'LinkedIn',
            action: () => open(profile.linkedinUrl)
        }
    ]

    useEffect(() => {
        console.log('i fire once')
        getProfile()
    }, [])

    const getProfile = async () => {
        try {
            setLoading(true, 'Carregando perfil...')
            const profileService = new ProfileService()
            const { data } = await profileService.getById(profileId)

            setProfileData({
                profile: data,
                headerData: {
                    role: data.role || '',
                    name: data.name || '',
                    surname: data.surname || ''
                }
            })

            setLoading(false)
        } catch (error) {
            setLoading(false)
            setErrorMessage('Ocorreu um erro ao consultar usuário')
        }
    }

    const open = (url: string) => window.open(url, '_blank')

    const content = () => (
        <Styles.Content>
            <UserHeader data={headerData} />

            <Styles.Figure>
                <Styles.Image src={profile?.profileAvatar} alt={initialName} />
            </Styles.Figure>

            <Styles.ActionGroup>
                {actions.map((item, index) => (
                    <Styles.Button
                        key={index}
                        title={item.title}
                        onClick={item.action}
                    >
                        {item.icon}
                    </Styles.Button>
                ))}
            </Styles.ActionGroup>
        </Styles.Content>
    )

    const errorContent = () => (
        <Styles.ErrorContainer>
            <Styles.ErrorImage src={Icons.Error} />
            <Styles.ErrorText>{errorMessage}</Styles.ErrorText>
        </Styles.ErrorContainer>
    )

    return (
        <>
            <AppHead title="Perfil" />

            <Styles.Container paddingBottom={freeHeight}>
                {hasProfile && content()}
                {!!errorMessage && errorContent()}
            </Styles.Container>
        </>
    )
}

export default Profile

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = context => {
    const profileId = context.params?.id

    return { props: { profileId } }
}
