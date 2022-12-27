import { AppButton } from '@/styles/css/ts/components'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.section``

const Button = styled(AppButton)`
    ${tw`w-full`}
`

export default { Container, Button }
