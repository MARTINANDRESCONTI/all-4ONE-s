import React from 'react'
import EditItem from './component/EditItem'
import Home from './views/Home'
import LogIn from './views/LogIn'
import SingIn from './views/SingIn'
import { Routes, Route } from 'react-router-dom'
import AddItem from './component/AddItem'

export default function App() {
  return (
    <div>      
        <Routes>
          <Route path='/' element={<LogIn />}/>
          <Route path='/singIn' element={<SingIn />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/add' element={<AddItem />} />
          <Route path='/edit/:id' element={<EditItem />} />
        </Routes>  
    </div>
  )
}
