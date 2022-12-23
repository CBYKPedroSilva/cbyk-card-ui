import React from 'react'
import Icons from '@/assets/images/icons'
import Styles from '@/styles/pages/profile'
import AppHead from '@/components/common/app-head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IProfile } from '@/interfaces/profile.interface'
import UserHeader, { IUserHeaderData } from '@/components/common/user-header'
import { ProfileService } from '@/services/profile.service'
import { WhatsAppService } from '@/services/_whatsapp.service'

interface IProfileProps {
    headerData: IUserHeaderData
    profile: IProfile
}

const Profile: React.FC<IProfileProps> = props => {
    const { headerData, profile } = props
    const whatsAppService = new WhatsAppService()

    const actions = [
        {
            icon: Icons.WhatsApp,
            title: 'WhatsApp',
            action: () =>
                whatsAppService.sendMessage(`55${profile.whatsAppNumber}`, '')
        },
        {
            icon: Icons.Phone,
            title: 'Celular',
            action: () => open(`tel:${profile.mobileNumber}`)
        },
        {
            icon: Icons.Mail,
            title: 'E-mail',
            action: () => open(`mailto:${profile.email}`)
        },
        {
            icon: Icons.Linkedin,
            title: 'LinkedIn',
            action: () => open(profile.linkedinUrl)
        }
    ]

    const open = (url: string) => window.open(url, '_blank')

    return (
        <>
            <AppHead title="Perfil" />

            <Styles.Container>
                <UserHeader data={headerData} />

                <Styles.Figure>
                    <Styles.Image src={profile.profileAvatar} />
                </Styles.Figure>

                <Styles.ActionGroup>
                    {actions.map((item, index) => (
                        <Styles.Button
                            key={index}
                            title={item.title}
                            onClick={item.action}
                        >
                            <Styles.Icon src={item.icon} alt={item.title} />
                        </Styles.Button>
                    ))}
                </Styles.ActionGroup>
            </Styles.Container>
        </>
    )
}

export default Profile

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
    return { paths: [], fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async context => {
    const profileId = context.params?.id

    let profile: IProfile = {} as IProfile
    let headerData: IUserHeaderData = {} as IUserHeaderData

    let props: IProfileProps = { headerData, profile }

    try {
        const profileService = new ProfileService()
        const { data } = await profileService.getById(String(profileId))

        props = {
            profile: data,
            headerData: {
                role: data.role,
                name: data.name,
                surname: data.surname
            }
        }

        return { props }
    } catch (error) {
        return { props }
    }
}
