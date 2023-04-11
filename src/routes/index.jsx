import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useFoodExplorer } from '../hooks/useFoodExplorerContext'
import { AppRoutesAdmin } from './app.routesAdmin'
import { AppRoutesUser } from './app.routesUser'
import { AuthRoutes } from './auth.routes'


export const Routes = () => {
  const { user } = useFoodExplorer()

  return (
    <BrowserRouter>
        { !user ? <AuthRoutes/> : user?.isAdmin === 1 ? <AppRoutesAdmin /> : <AppRoutesUser />}
    </BrowserRouter>
  )
}
