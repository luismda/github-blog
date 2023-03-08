import 'react-loading-skeleton/dist/skeleton.css'

import { ThemeProvider } from 'styled-components'
import { HashRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <HashRouter>
        <Router />
      </HashRouter>
    </ThemeProvider>
  )
}
