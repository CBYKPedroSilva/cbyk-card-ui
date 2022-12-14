import { useQRCode } from 'next-qrcode'
import Styles from '@/styles/pages/share-profile'
import React, { useEffect, useState } from 'react'
import AppHead from '@/components/common/app-head'
import { QRCodeOptions } from 'next-qrcode/dist/useQRCode'
import UserHeader, { IUserHeaderData } from '@/components/common/user-header'

const ShareProfile: React.FC = () => {
    const { Canvas } = useQRCode()
    const [link, setLink] = useState('')
    const [userData, setUserData] = useState<IUserHeaderData>({
        name: 'Guilherme',
        surname: 'Muller',
        role: 'Sócio-diretor'
    })

    const qrOption: QRCodeOptions = {
        quality: 0.5,
        level: 'H',
        width: 360,
        scale: 4,
        color: {
            dark: '#E6E6E6',
            light: '#161516'
        }
    }

    useEffect(() => {
        buildLink()
    }, [])

    const buildLink = () => {
        const profileId = 1
        const domain = window.location.origin
        setLink(`${domain}/profile/${profileId}`)
    }

    const handleShare = async () => {
        try {
            const shareData = {
                url: link,
                title: 'Cartão de visitas',
                text: `Este é o cartão de visitas de ${userData.name} ${userData.surname}`
            }

            await navigator.share(shareData)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <AppHead title="Compartilhar" />

            <Styles.Container>
                <UserHeader data={userData} />

                <Styles.Card>
                    {!!link && <Canvas text={link} options={qrOption} />}
                </Styles.Card>

                <Styles.Button onClick={handleShare}>
                    Compartilhar
                </Styles.Button>
            </Styles.Container>
        </>
    )
}

export default ShareProfile
