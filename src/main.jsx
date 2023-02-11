import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      {/* <AuthProvider> */}
        <SignUp />
      {/* </AuthProvider> */}
    </ThemeProvider>
  </React.StrictMode>
)
