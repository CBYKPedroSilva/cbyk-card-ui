import styled from 'styled-components'
import tw from 'twin.macro'
import { AppButton, AppContainer } from '../css/ts/components'

const Container = styled(AppContainer)`
    ${tw`max-w-[500px]`}
`

const Header = styled.header`
    ${tw`grid grid-cols-3`}
`

const View = styled.div`
    ${tw`flex flex-col items-center`}
`

const BackButton = styled(AppButton)`
    ${tw`w-9 h-9 p-0 rounded-full flex items-center justify-center text-[1.4rem]`}
    color: ${props => props.theme.colors.bgPrimary};
`

const ImageContainer = styled.figure`
    ${tw`mb-2 pt-8`}

    > svg {
        scale: 1.8;
    }
`

const Title = styled.h2`
    ${tw`text-lg text-center mb-14`}
`

const Form = styled.form`
    ${tw`w-full`}
`

const Button = styled(AppButton)`
    ${tw`w-full mt-8`}
`

export default {
    ImageContainer,
    BackButton,
    Container,
    Header,
    Button,
    Title,
    Form,
    View
}
