import tw from 'twin.macro'
import { fadeIn } from '../animation'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../css/ts/components'

interface ContainerProps {
    paddingBottom?: number
}
const Container = styled(AppContainer)<ContainerProps>`
    ${tw`min-h-screen flex justify-center`}
    background: ${({ theme }) => theme.colors.bgLight};
    padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px`};
`

const Content = styled.article`
    ${tw`w-full py-8 flex flex-col justify-between max-w-[500px]`}
`

const Figure = styled.figure`
    ${tw`w-full my-8 flex items-center justify-center rounded-3xl`}
    background: ${({ theme }) => theme.colors.bgPrimary};
`

const Image = styled.img`
    ${tw`w-full rounded-xl relative min-h-[10rem]`}

    &:after {
        content: attr(alt);
        ${tw`absolute left-0 top-0 w-full h-full flex items-center justify-center text-[6rem]`}
        background: ${({ theme }) => theme.colors.bgSecondary};
    }
`

const ActionGroup = styled.article`
    ${tw`grid gap-6 grid-cols-4`}
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
    Content,
    Button,
    Figure,
    Image,
    Icon
}
