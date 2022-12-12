import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

const animationIn = {
    className: 'animate__animated animate__fadeInDown'
}

interface CommonProps {
    color?: string
}

export const Backdrop = styled.section`
    ${tw`fixed w-full h-full top-0 left-0 flex flex-col justify-start items-center z-30`}
    background: #000000a1;
    padding-top: 16vh;
`

export const ModalContainer = styled.article.attrs(animationIn)`
    ${tw`p-6 pb-10 flex flex-col z-50 rounded-lg mx-14`}
    height: 40vh;
    background: ${({ theme }) => theme.colors.bgPrimary};
    max-height: 75vh;
    max-width: 1440px;
`

export const ModalHeader = styled.div``

export const ModalBody = styled.div<CommonProps>`
    ${tw`flex-auto overflow-y-auto overflow-x-hidden`}

    ::-webkit-scrollbar-thumb {
        border: 0px solid #ffffff;
        background-color: ${({ theme, color }) =>
            color || theme.colors.primary};
    }
`

export const ModalFooter = styled.div`
    ${tw`py-2`}
`

export const Button = styled.button.attrs(animationIn)<CommonProps>`
    ${tw`px-4 py-2 flex justify-center items-center z-50 rounded-full relative bottom-5`}
    background: ${({ theme, color }) => color || theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};

    > svg {
        ${tw`text-lg ml-2`}
    }
`
