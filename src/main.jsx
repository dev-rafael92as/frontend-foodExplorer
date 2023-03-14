import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { FoodExplorerProvider } from './hooks/useFoodExplorerContext'
import { Routes } from './routes'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <FoodExplorerProvider>
        <Routes />
      </FoodExplorerProvider>
    </ThemeProvider>
  </React.StrictMode>
)
