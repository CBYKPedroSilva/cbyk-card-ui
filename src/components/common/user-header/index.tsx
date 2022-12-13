import React from 'react'
import Styles from './styles'
import LogoCBYK from '@/assets/images/cbyk-logo.png'

export interface IUserHeaderData {
    role: string
    name: string
    surname: string
}
interface UserHeaderProps {
    data: IUserHeaderData
}

const UserHeader: React.FC<UserHeaderProps> = ({ data }) => {
    return (
        <Styles.Container>
            <Styles.Image src={LogoCBYK} alt="CBYK" />
            <Styles.Text>{data.name}</Styles.Text>
            <Styles.Text>
                {data.surname}
                <Styles.Badge>{data.role}</Styles.Badge>
            </Styles.Text>
        </Styles.Container>
    )
}

export default UserHeader
