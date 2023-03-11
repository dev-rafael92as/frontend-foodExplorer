import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DetailsAdmin } from '../pages/DetailsAdmin'
import { EditDishe } from '../pages/EditDishe'
import { HomeAdmin } from '../pages/HomeAdmin'
import { NewDishe } from '../pages/NewDishe'


export function AppRoutesAdmin() {
  return (
    <Routes>
        <Route path="/" element={ <HomeAdmin/>} />
        <Route path="/details-admin" element={ <DetailsAdmin/>} />
        <Route path="/new-dishe" element={ <NewDishe /> } />
        <Route path="/edit" element={ <EditDishe /> } />
    </Routes>
  )
}
