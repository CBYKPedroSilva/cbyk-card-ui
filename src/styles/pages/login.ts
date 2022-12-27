import styled from 'styled-components'
import tw from 'twin.macro'
import { AppButton, AppContainer } from '../css/ts/components'

const Container = styled(AppContainer)`
    ${tw`flex min-h-full flex-col items-center justify-between`}
`

const View = styled.div`
    ${tw`w-full flex flex-col items-center justify-center max-w-[500px]`}
`

const Image = styled.img`
    ${tw`mb-2 mt-24 w-[74px]`}
`

const ImageContainer = styled.figure`
    ${tw`mb-2 mt-24`}

    > svg {
        scale: 1.8;
    }
`

const Title = styled.h2`
    ${tw`text-[12px] mb-14`}
`

const Form = styled.form`
    ${tw`w-full max-w-[500px]`}
`

const Button = styled(AppButton)`
    ${tw`w-full mt-8 mb-4`}
`

const Link = styled.a`
    ${tw`underline`}
`

export default {
    ImageContainer,
    Container,
    Button,
    Title,
    Image,
    Form,
    View,
    Link
}
