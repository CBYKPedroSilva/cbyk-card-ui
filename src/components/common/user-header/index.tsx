import React from 'react'
import Styles from './styles'
import LogoCBYK from '@/assets/images/cbyk-logo.png'

const UserHeader: React.FC = () => {
    return (
        <Styles.Container>
            <Styles.Image src={LogoCBYK} alt="CBYK" />
            <Styles.Text>Guilherme</Styles.Text>
            <Styles.Text>
                Muller
                <Styles.Badge>Sócio-diretor</Styles.Badge>
            </Styles.Text>
        </Styles.Container>
    )
}

export default UserHeader
