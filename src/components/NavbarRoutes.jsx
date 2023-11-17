import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SignIn from '../pages/signIn'
import BecomeSeller from '../pages/becomeSeller'

const NavbarRoutes = () => {
  return (
    <Routes>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/becomeSeller' element={<BecomeSeller/>}/>
    </Routes>
  )
}

export default NavbarRoutes