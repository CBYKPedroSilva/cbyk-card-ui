import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.article`
    ${tw`w-full`}
`

const Image = styled.img`
    ${tw`w-14`}
`

const Badge = styled.span`
    ${tw`px-2 py-0.5 ml-3 relative bottom-1 rounded-md text-sm`}
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.bgPrimary};
`

const Text = styled.h2`
    ${tw`text-[2.5rem] leading-9 font-extrabold`}
    color: ${({ theme }) => theme.colors.bgPrimary};
`

export default {
    Container,
    Image,
    Badge,
    Text
}
