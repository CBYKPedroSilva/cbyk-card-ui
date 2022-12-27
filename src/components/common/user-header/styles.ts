import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.article`
    ${tw`w-full max-w-[500px]`}
`

const Image = styled.img`
    ${tw`w-14`}
`

const Badge = styled.span`
    ${tw`mt-2 px-2 py-0.5 leading-[1.4] relative bottom-1 rounded-md text-sm whitespace-nowrap`}
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.bgPrimary};
`

const Text = styled.h2`
    ${tw`text-[2.5rem] leading-9 font-extrabold`}
    color: ${({ theme }) => theme.colors.bgPrimary};

    &:last-of-type {
        ${tw`flex items-end flex-wrap`}
    }
`

export default {
    Container,
    Image,
    Badge,
    Text
}
