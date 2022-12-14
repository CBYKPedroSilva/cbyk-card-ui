import tw from 'twin.macro'
import { fadeIn } from '../animation'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../css/ts/components'

const Container = styled(AppContainer)`
    ${tw`pt-16 min-h-screen flex flex-col items-center`}
    background: ${({ theme }) => theme.colors.bgLight};
`

const Card = styled.article`
    ${tw`my-8 flex flex-col items-center justify-center rounded-3xl p-8 pt-16 pb-6 relative w-full max-w-[500px]`}
    background: ${({ theme }) => theme.colors.bgPrimary};

    &:after {
        ${tw`content-[''] w-10 h-10 absolute top-6 right-6`};
        border: 12px solid ${({ theme }) => theme.colors.primary};
        border-bottom: none;
        border-left: none;
    }
`

const Image = styled.img`
    ${tw`max-w-[80%] rounded-xl`}
`

const Button = styled(AppButton).attrs(fadeIn.up)`
    ${tw`w-full flex items-center justify-center text-lg font-bold max-w-[500px]`}
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.bgLight};
    box-shadow: 4.57803px 4.57803px 17.1676px rgba(0, 0, 0, 0.1);
`

export default {
    Container,
    Button,
    Card,
    Image
}
