import styled from 'styled-components'
import tw from 'twin.macro'

const Backdrop = styled.section`
    ${tw`fixed w-full h-full top-0 left-0 flex flex-col justify-center items-center z-30`}
    background: #000000a1;
`

const Label = styled.label`
    ${tw`font-bold mt-4`}
    color: ${({ theme }) => theme.colors.white};
`

const Image = styled.img`
    ${tw`w-24`}
    animation: rotate-center 2s ease-in-out infinite both;

    @keyframes rotate-center {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`

export default {
    Backdrop,
    Label,
    Image
}
