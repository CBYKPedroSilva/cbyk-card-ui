import React from 'react'
import Icons from '@/assets/images/icons'
import Styles from '@/styles/pages/profile'
import AppHead from '@/components/common/app-head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IProfile } from '@/interfaces/profile.interface'
import UserHeader, { IUserHeaderData } from '@/components/common/user-header'

interface IProfileProps {
    headerData: IUserHeaderData
    profile: IProfile
}

const Profile: React.FC<IProfileProps> = props => {
    const { headerData, profile } = props

    const actions = [
        {
            icon: Icons.WhatsApp,
            title: 'WhatsApp',
            action: () => {}
        },
        {
            icon: Icons.Phone,
            title: 'Celular',
            action: () => {}
        },
        {
            icon: Icons.Mail,
            title: 'E-mail',
            action: () => {}
        },
        {
            icon: Icons.Linkedin,
            title: 'LinkedIn',
            action: () => {}
        },
        {
            icon: Icons.Globe,
            title: 'Link',
            action: () => {}
        }
    ]

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
                        <Styles.Button key={index} title={item.title}>
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
    const fake_avatar = `https://www.w3schools.com/howto/img_avatar.png`

    const profile: IProfile = {
        id: String(profileId),
        name: 'Pedro',
        surname: 'Silva',
        companyAvatar: '',
        companyName: 'CBYK',
        websiteUrl: 'websiteUrl',
        mobileNumber: 11958885825,
        email: 'teste@example.com',
        linkedinUrl: 'linkedinUrl',
        profileAvatar: fake_avatar,
        whatsAppNumber: 11958885825,
        role: 'Desenvolvedor Frontend'
    }

    const headerData: IUserHeaderData = {
        role: profile.role,
        name: profile.name,
        surname: profile.surname
    }

    const props: IProfileProps = { headerData, profile }

    return { props }
}
