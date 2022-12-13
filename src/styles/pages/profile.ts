import tw from 'twin.macro'
import { fadeIn } from '../animation'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../css/ts/components'

const Container = styled(AppContainer)`
    ${tw`pt-16 min-h-screen`}
    background: ${({ theme }) => theme.colors.bgLight};
`

const Figure = styled.figure`
    ${tw`my-8 flex items-center justify-center rounded-3xl`}
    background: ${({ theme }) => theme.colors.bgPrimary};
`

const Image = styled.img`
    ${tw`w-full rounded-xl`}
`

const ActionGroup = styled.article`
    ${tw`grid gap-6 grid-cols-5`}
`

const Button = styled(AppButton).attrs(fadeIn.up)`
    ${tw`w-full flex items-center justify-center text-lg font-bold`}
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.bgLight};
    box-shadow: 4.57803px 4.57803px 17.1676px rgba(0, 0, 0, 0.1);
`

const Icon = styled.img``

export default {
    ActionGroup,
    Container,
    Button,
    Figure,
    Image,
    Icon
}
