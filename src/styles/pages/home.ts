import tw from 'twin.macro'
import styled from 'styled-components'
import { AppButton, AppContainer } from '../css/ts/components'
import { fadeIn } from '../animation'

export const Container = styled(AppContainer)`
    ${tw`h-screen flex flex-col justify-center items-center`}
`

export const Title = styled.h1.attrs(fadeIn.down)`
    ${tw`text-lg`}
`

export const Image = styled.img.attrs(fadeIn.default)`
    ${tw`mt-8`}
`

export const Content = styled.article`
    ${tw`mt-8`}
`

export const Button = styled(AppButton).attrs(fadeIn.up)`
    ${tw`min-w-[150px]`}

    &:first-of-type {
        ${tw`mr-4`}
    }
`
