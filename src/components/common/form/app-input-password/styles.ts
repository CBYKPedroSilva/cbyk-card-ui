import { AppFormGroup } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Wrapper = styled(AppFormGroup)``

const Container = styled(AppFormGroup)`
    ${tw`flex mb-0`}
`

const Input = styled.input`
    ${tw`flex-1 rounded-r-none`}
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
`

const Button = styled.button`
    ${tw`w-12 h-11 text-[1.4rem] rounded-r-xl flex items-center justify-center`}
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.bgSecondary};
`

const Label = styled.label``

const Span = styled.span``

export default {
    Wrapper,
    Container,
    Input,
    Button,
    Label,
    Span
}
