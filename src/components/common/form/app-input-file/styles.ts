import { AppFormGroup } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Wrapper = styled(AppFormGroup)``

const Container = styled(AppFormGroup)`
    ${tw`flex mb-0`}
`

const Input = styled.input`
    ${tw`flex-1 rounded-r-none z-[-1] absolute opacity-0`}
    border-top-right-radius: 0px !important;
    border-bottom-right-radius: 0px !important;
`

const Label = styled.label``

const LabelButton = styled.label`
    ${tw`w-full h-11 m-0 py-1 px-5 rounded-xl items-center justify-between`}
    background: ${({ theme }) => theme.colors.bgSecondary};
    display: flex !important;

    > svg {
        ${tw`text-lg`}
        color: ${({ theme }) => theme.colors.primary} !important;
    }
`

const Text = styled.h5`
    ${tw`font-normal text-base`}
    color: #757575;
`

const Span = styled.span``

export default {
    LabelButton,
    Container,
    Wrapper,
    Input,
    Label,
    Span,
    Text
}
