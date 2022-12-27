import React from 'react'
import Images from '@/assets/images'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import Styles from '@/styles/pages/home'
import Icons from '@/assets/images/icons'
import AppHead from '@/components/common/app-head'
import { IProfileStore } from '@/store/@interfaces/profile.interface'

const Home: React.FC = () => {
    const router = useRouter()
    const { profile } = useMapState('profile') as IProfileStore
    const actions = [
        {
            icon: <Icons.QR />,
            label: 'Ver QrCode',
            action: () => router.push('/share-profile')
        },
        {
            icon: <Icons.Edit />,
            label: 'Editar dados',
            action: () => router.push('/update-profile')
        }
    ]

    return (
        <>
            <AppHead title="Home" />

            <Styles.Container>
                <Images.CBYKLogoWhite />

                <Styles.Figure>
                    <Styles.Image src={profile.profileAvatar} alt="avatar" />
                </Styles.Figure>

                <Styles.Title>{profile.name}</Styles.Title>
                <Styles.Subtitle>{profile.role}</Styles.Subtitle>

                <Styles.Content>
                    {actions.map((item, index) => (
                        <Styles.Button key={index} onClick={item.action}>
                            <Styles.Icon>{item.icon}</Styles.Icon>
                            {item.label}
                        </Styles.Button>
                    ))}
                </Styles.Content>
            </Styles.Container>
        </>
    )
}

export default Home
