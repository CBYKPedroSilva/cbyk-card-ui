import tw from 'twin.macro'
import styled from 'styled-components'

export const AppFormGroup = styled.div`
    ${tw`w-auto mb-6`}

    > label {
        ${tw`block mb-2`}
    }

    > input,
    > select,
    > textarea {
        ${tw`w-full h-11 block rounded-xl py-1 px-4 border border-solid`}
        color: ${props => props.theme.colors.text};
        text-rendering: optimizeLegibility !important;
        background: ${({ theme }) => theme.colors.bgSecondary};
        border-color: ${({ theme }) => theme.colors.bgSecondary};

        &:focus {
            ${tw`outline-none border border-solid`}
            border-color: ${props => props.theme.colors.primary};
        }
    }

    > span {
        ${tw`text-sm absolute mt-1`}
        color: ${props => props.theme.colors.primary};
    }
`
