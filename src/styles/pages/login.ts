import styled from 'styled-components'
import tw from 'twin.macro'
import { AppButton, AppContainer } from '../css/ts/components'

const Container = styled(AppContainer)`
    ${tw`flex min-h-full flex-col items-center justify-center`}
`

const Image = styled.img`
    ${tw`mb-6`}
`

const Title = styled.h2`
    ${tw`text-lg mb-14`}
`

const Form = styled.form`
    ${tw`w-full`}
`

const Button = styled(AppButton)`
    ${tw`w-full mt-8`}
`

export default {
    Container,
    Title,
    Image,
    Form,
    Button
}
