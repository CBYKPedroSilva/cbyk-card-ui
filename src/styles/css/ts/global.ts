import 'react-toastify/dist/ReactToastify.css'

import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
import 'animate.css'

export default createGlobalStyle`
   :root {
    --toastify-color-dark: ${props => props.theme.colors.bgSecondary};
   }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::placeholder {
        font-family: 'Poppins';
        ${tw`text-base`}
    }
  }

  body {
    ${tw`text-base`}
    background: ${props => props.theme.colors.bgPrimary};
    color: ${props => props.theme.colors.text};
    font-family: 'Poppins';
    font-weight: 400;

  }

  html {
    scroll-behavior: smooth;
  }

  button {
    ${tw`border-0`}
  }

  #__next {
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text}
  }
`
