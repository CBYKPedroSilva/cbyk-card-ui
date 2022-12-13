import React, { useState } from 'react'
import Icons from '@/assets/images/icons'
import Styles from '@/styles/pages/profile'
import AppHead from '@/components/common/app-head'
import UserHeader, { IUserHeaderData } from '@/components/common/user-header'

const Profile: React.FC = () => {
    const fake_avatar = `https://www.w3schools.com/howto/img_avatar.png`
    const [userData, setUserData] = useState<IUserHeaderData>({
        name: 'Guilherme',
        surname: 'Muller',
        role: 'Sócio-diretor'
    })

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
                <UserHeader data={userData} />

                <Styles.Figure>
                    <Styles.Image src={fake_avatar} />
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
