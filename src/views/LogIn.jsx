import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LogIn() {
  const [nombre, setNombre] = useState('')
  const [contraseña, setContraseña] = useState('')
  const navigate = useNavigate()

  const postCustomer = async (e) =>{
    e.preventDefault()
    await axios.post(URI, {nombre, contraseña})
    navigate('/Home')
  }

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={postCustomer}>
        <div>
          <label>Nombre</label>
          <input 
            value={nombre}
            onChange={(e) =>setNombre(e.target.value)}
          />          
        </div>
        <div>
          <label>Contraseña</label>
          <input 
            value={contraseña}
            onChange={(e) =>setContraseña(e.target.value)}
          />          
        </div>
        <button>Log</button>

      </form>
    </div>
  )
}
