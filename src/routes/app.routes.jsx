import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Details } from '../pages/DetailsUser'
import { HomeUser } from '../pages/HomeUser'


export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={ <HomeUser/>} />
        <Route path="/details" element={ <Details/>} />
    </Routes>
  )
}
