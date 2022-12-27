import React from 'react'
import Styles from './styles'
import Images from '@/assets/images'

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
            <Images.CBYKLogo />
            <Styles.Text>{data.name}</Styles.Text>
            <Styles.Text>
                {data.surname} &nbsp;
                <Styles.Badge>{data.role}</Styles.Badge>
            </Styles.Text>
        </Styles.Container>
    )
}

export default UserHeader
