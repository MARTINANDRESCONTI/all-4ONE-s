import React from 'react'
import EditItem from './component/EditItem'
import Home from './views/Home'
import { Routes, Route } from 'react-router-dom'
import AddItem from './component/AddItem'

export default function App() {
  return (
    <div>      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddItem />} />
          <Route path='/edit/:id' element={<EditItem />} />
        </Routes>  
    </div>
  )
}
