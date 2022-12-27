import tw from 'twin.macro'
import { fadeIn } from '../animation'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../css/ts/components'

const Container = styled(AppContainer)`
    ${tw`pt-16 min-h-screen flex flex-col items-center`}
    background: ${({ theme }) => theme.colors.bgLight};

    &:before {
        ${tw`content-[''] absolute top-0 w-full h-60 shadow-lg`}
        background: linear-gradient(155deg,#323232 46%,#191919 80%);
    }

    * {
        ${tw`z-[1]`}
    }
`

const Title = styled.h1.attrs(fadeIn.down)`
    ${tw`mt-4 text-lg font-medium leading-3`}
    color: ${({ theme }) => theme.colors.black};
`

const Subtitle = styled.h4.attrs(fadeIn.up)`
    ${tw`font-normal mb-10`}
    color: ${({ theme }) => theme.colors.black};
`

const Figure = styled.figure.attrs(fadeIn.default)`
    ${tw`mt-2 rounded-2xl p-3 flex items-center justify-center`}
    border: 3px solid ${({ theme }) => theme.colors.primary};
`

const Image = styled.img.attrs(fadeIn.default)`
    ${tw`w-48 h-48 rounded-2xl object-cover relative`}

    &:after {
        content: attr(alt);
        ${tw`absolute left-0 top-0 w-full h-full flex items-center justify-center text-[6rem]`}
        background: ${({ theme }) => theme.colors.primary};
    }
`

const Content = styled.article`
    ${tw`w-full max-w-[400px]`}
`

const Button = styled(AppButton).attrs(fadeIn.up)`
    ${tw`w-full h-24 mb-6 flex items-center justify-center text-lg font-bold`}
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.bgLight};
    box-shadow: 4.57803px 4.57803px 17.1676px rgba(0, 0, 0, 0.1);
`

const Icon = styled.i`
    ${tw`mr-4 w-8 h-8`}
`

export default {
    Container,
    Subtitle,
    Content,
    Figure,
    Button,
    Title,
    Image,
    Icon
}
