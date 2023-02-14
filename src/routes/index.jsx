import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutesAdmin } from './app.routesAdmin'
import { AppRoutesUser } from './app.routesUser'
import { AuthRoutes } from './auth.routes'


export const Routes = () => {
    const auth = false
    const admin = true

  return (
    <BrowserRouter>
        { auth ? <AuthRoutes/> : admin ? <AppRoutesAdmin /> : <AppRoutesUser />}
    </BrowserRouter>
  )
}
