import React from 'react'
import { useRouter } from 'next/router'
import Styles from '@/styles/pages/home'
import QRIcon from '@/assets/images/icons/qr.png'
import AppHead from '@/components/common/app-head'
import EditIcon from '@/assets/images/icons/edit.png'
import LogoCBYKWhite from '@/assets/images/cbyk-logo-white.png'

const Home: React.FC = () => {
    const fake_avatar = `https://www.w3schools.com/howto/img_avatar.png`
    const router = useRouter()

    const actions = [
        {
            icon: QRIcon,
            label: 'Ver QrCode',
            action: () => router.push('/share-profile')
        },
        {
            icon: EditIcon,
            label: 'Editar dados',
            action: () => {}
        }
    ]

    return (
        <>
            <AppHead title="Hello World" />

            <Styles.Container>
                <Styles.SmallImage src={LogoCBYKWhite} alt="CBYK" />

                <Styles.Figure>
                    <Styles.Image src={fake_avatar} alt="avatar" />
                </Styles.Figure>

                <Styles.Title>Guilherme Muller</Styles.Title>
                <Styles.Subtitle>Sócio-diretor</Styles.Subtitle>

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
