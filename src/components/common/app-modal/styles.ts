import styled from 'styled-components'
import tw from 'twin.macro'

const animationIn = {
    className: 'animate__animated animate__fadeInDown'
}

interface CommonProps {
    color?: string
}

const Backdrop = styled.section`
    ${tw`fixed w-full h-full top-0 left-0 flex flex-col justify-start items-center z-30`}
    background: #000000a1;
    padding-top: 16vh;
`

const ModalContainer = styled.article.attrs(animationIn)`
    ${tw`p-6 pb-10 flex flex-col z-50 rounded-lg mx-14`}
    height: 40vh;
    background: ${({ theme }) => theme.colors.bgPrimary};
    max-height: 75vh;
    max-width: 1440px;
`

const ModalHeader = styled.div``

const ModalBody = styled.div<CommonProps>`
    ${tw`flex-auto overflow-y-auto overflow-x-hidden`}

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        border: 0px solid #ffffff;
        background-color: ${({ theme, color }) =>
            color || theme.colors.primary};
    }
`

const ModalFooter = styled.div`
    ${tw`py-2`}
`

const Button = styled.button.attrs(animationIn)<CommonProps>`
    ${tw`px-4 py-2 flex justify-center items-center z-50 rounded-full relative bottom-5`}
    background: ${({ theme, color }) => color || theme.colors.primary};
    color: ${({ theme }) => theme.colors.bgPrimary};

    > svg {
        ${tw`text-lg ml-2`}
    }
`

export default {
    Backdrop,
    ModalContainer,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
}
