import React from 'react'
import Logo from '@/assets/vercel.png'
import Styles from '@/styles/pages/home'
import AppHead from '@/components/common/app-head'
import { THEME_ITEMS } from '@/contants/theme-type'
import { uiActions } from '@/store/reducers/ui.reducer'
import LogoCBYKWhite from '@/assets/images/cbyk-logo-white.png'
import QRIcon from '@/assets/images/icons/qr.png'
import EditIcon from '@/assets/images/icons/edit.png'

const Home: React.FC = () => {
    const fake_avatar = `https://www.w3schools.com/howto/img_avatar.png`

    const actions = [
        {
            icon: QRIcon,
            label: 'Ver QrCode',
            action: () => {}
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
