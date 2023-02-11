import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeUser } from '../pages/HomeUser'


export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={ <HomeUser/>} />
    </Routes>
  )
}
