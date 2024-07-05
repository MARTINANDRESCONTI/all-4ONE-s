import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// const URI = 'https://martinandresconti.alwaysdata.net/log/'
const URI = 'http://localhost:3000/log/'

export default function LogIn() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const postLog = async (e) =>{
    e.preventDefault()
    // await axios.post(URI, {email, password})
    await axios.post(URI, {nombre, email})
    navigate(`/home/${email}`)
  }

  return (
    <div>
      <h2>All 4ONE's</h2>
      <h3>Beer house</h3>
      <form onSubmit={postLog}>
        <div>
          <label>Nombre</label>
          <input 
            value={nombre}
            onChange={(e) =>setNombre(e.target.value)}
          />          
        </div>
        <div>
          <label>Email</label>
          <input 
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />          
        </div>
      
        {/* <div>
          <label>Password</label>
          <input 
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
          />          
        </div> */}
        <button>Ingresar</button>
      </form>

      {/* <p>todavia no tienes una cuenta?</p> */}
      {/* <Link to={'/singin'}>Registrarse</Link> */}
    </div>
  )
}
