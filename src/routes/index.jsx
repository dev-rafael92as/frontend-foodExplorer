import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'


export const Routes = () => {
    const auth = true

  return (
    <BrowserRouter>
        { auth ? <AppRoutes /> : <AuthRoutes/> }
    </BrowserRouter>
  )
}
