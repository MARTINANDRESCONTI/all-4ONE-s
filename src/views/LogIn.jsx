import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Icon from '/icon.png'
import './Login.css'

// const URI = 'https://martinandresconti.alwaysdata.net/log/'
const URI = 'http://localhost:3000/log/'

export default function LogIn() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const postLog = async (e) =>{
    e.preventDefault()
    await axios.post(URI, {nombre, email})
    navigate(`/home/${email}`)
  }

  return (
    <>
        <div className='beerhouse'>
          <div className='beerhouse titulo'>
            <img src={ Icon } className='logo' alt="logo" />
            <h2>All 4ONE's</h2>
          </div>
          <h3>Beer house</h3>      
        </div> 
      <div className='logincontainer'>
        <form onSubmit={postLog} className='lformcontainer'>
          <div className='inputcontainer'>
            <label>Nombre</label>
            <input 
              value={nombre}
              onChange={(e) =>setNombre(e.target.value)}
              required
            />          
          </div>
          <div className='inputcontainer'>
            <label>Email</label>
            <input 
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
              type='email'
              required
            />          
          </div>
          <button className='button'>Ingresar</button>
        </form>
      </div>
    </>
  )
}
