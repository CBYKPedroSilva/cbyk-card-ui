import React, { useState } from 'react'
import Styles from '@/styles/pages/share-profile'
import AppHead from '@/components/common/app-head'
import UserHeader, { IUserHeaderData } from '@/components/common/user-header'

const ShareProfile: React.FC = () => {
    const fake_qr = `https://farm4.static.flickr.com/3217/5756356352_1af777b771_b.jpg`
    const [qrCode, setQrCode] = useState(fake_qr)
    const [userData, setUserData] = useState<IUserHeaderData>({
        name: 'Guilherme',
        surname: 'Muller',
        role: 'Sócio-diretor'
    })
    const handleShare = () => {}

    return (
        <>
            <AppHead title="Compartilhar" />

            <Styles.Container>
                <UserHeader data={userData} />

                <Styles.Card>
                    <Styles.Image src={qrCode} />
                </Styles.Card>

                <Styles.Button onClick={handleShare}>
                    Compartilhar
                </Styles.Button>
            </Styles.Container>
        </>
    )
}

export default ShareProfile
