import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['base-border']};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['base-label']};
    transition: background-color 0.2s;
  }

  body {
    background: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, select, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`
