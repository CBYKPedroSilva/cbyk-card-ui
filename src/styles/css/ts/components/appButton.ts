import styled from 'styled-components'
import tw from 'twin.macro'

export const AppButton = styled.button`
    ${tw`px-2 py-4 border-0 outline-none cursor-pointer rounded-full`}

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.bgPrimary};
    -webkit-tap-highlight-color: transparent;

    &:active {
        filter: brightness(70%);
    }

    &:disabled {
        ${tw`opacity-60 cursor-not-allowed`}
    }
`
