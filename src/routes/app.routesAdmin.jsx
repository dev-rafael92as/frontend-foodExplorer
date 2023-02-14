import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DetailsAdmin } from '../pages/DetailsAdmin'
import { HomeAdmin } from '../pages/HomeAdmin'


export function AppRoutesAdmin() {
  return (
    <Routes>
        <Route path="/" element={ <HomeAdmin/>} />
        <Route path="/detailsAdmin" element={ <DetailsAdmin/>} />
    </Routes>
  )
}
