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

const Image = styled.img`
    ${tw`mb-2`}
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
    BackButton,
    Container,
    Header,
    Button,
    Image,
    Title,
    Form,
    View
}
