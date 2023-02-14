import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DetailsUser } from '../pages/DetailsUser'
import { HomeUser } from '../pages/HomeUser'


export function AppRoutesUser() {
  return (
    <Routes>
        <Route path="/" element={ <HomeUser/>} />
        <Route path="/details" element={ <DetailsUser/>} />
    </Routes>
  )
}
