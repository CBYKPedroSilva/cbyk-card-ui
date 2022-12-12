import React from 'react'
import Logo from '@/assets/vercel.png'
import AppHead from '@/components/common/app-head'
import { THEME_ITEMS } from '@/contants/theme-type'
import { uiActions } from '@/store/reducers/ui.reducer'
import { Container, Image, Title, Content, Button } from '@/styles/pages/home'

const Home: React.FC = () => {
    return (
        <>
            <AppHead title="Hello World" />

            <Container>
                <Title>Hello World</Title>
                <Title>TS | Tailwind</Title>

                <Image src={Logo} alt="logo" />

                <Content>
                    {THEME_ITEMS.map((item, index) => (
                        <Button
                            key={index}
                            onClick={() => uiActions.setTheme(item.id)}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Content>
            </Container>
        </>
    )
}

export default Home
