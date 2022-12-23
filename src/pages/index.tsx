import React from 'react'
import { useMapState } from '@/hooks'
import { useRouter } from 'next/router'
import Styles from '@/styles/pages/home'
import QRIcon from '@/assets/images/icons/qr.png'
import AppHead from '@/components/common/app-head'
import EditIcon from '@/assets/images/icons/edit.png'
import LogoCBYKWhite from '@/assets/images/cbyk-logo-white.png'
import { IProfileStore } from '@/store/@interfaces/profile.interface'

const Home: React.FC = () => {
    const router = useRouter()
    const { profile } = useMapState('profile') as IProfileStore
    const actions = [
        {
            icon: QRIcon,
            label: 'Ver QrCode',
            action: () => router.push('/share-profile')
        },
        {
            icon: EditIcon,
            label: 'Editar dados',
            action: () => router.push('/update-profile')
        }
    ]

    return (
        <>
            <AppHead title="Home" />

            <Styles.Container>
                <Styles.SmallImage src={LogoCBYKWhite} alt="CBYK" />

                <Styles.Figure>
                    <Styles.Image src={profile.profileAvatar} alt="avatar" />
                </Styles.Figure>

                <Styles.Title>{profile.name}</Styles.Title>
                <Styles.Subtitle>{profile.role}</Styles.Subtitle>

                <Styles.Content>
                    {actions.map((item, index) => (
                        <Styles.Button key={index} onClick={item.action}>
                            <Styles.Icon src={item.icon} />
                            {item.label}
                        </Styles.Button>
                    ))}
                </Styles.Content>
            </Styles.Container>
        </>
    )
}

export default Home
