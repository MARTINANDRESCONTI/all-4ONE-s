// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const URI = 'https://martinandresconti.alwaysdata.net/log/'
// const URI = 'http://localhost:3000/log/singin'

// export default function SingIn() {
//   const [nombre, setNombre] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')  
//   const navigate = useNavigate()

//   const postRegistro = async (e) =>{
//     e.preventDefault()
//     await axios.post(URI, {nombre, email, password})
//     navigate('/')
//   }

//   return (
//     <div>
//       <h2>Registrarse</h2>
//       <form onSubmit={postRegistro}>
//         <div>
//           <label>Nombre</label>
//           <input 
//             value={nombre}
//             onChange={(e) =>setNombre(e.target.value)}
//           />          
//         </div>
//         <div>
//           <label>Email</label>
//           <input 
//             value={email}
//             onChange={(e) =>setEmail(e.target.value)}
//           />          
//         </div>
//         <div>
//           <label>Password</label>
//           <input 
//             value={password}
//             onChange={(e) =>setPassword(e.target.value)}
//           />          
//         </div>
//         <button>Enviar</button>
//       </form>
//       <Link to={'/'}>Ir a inicio</Link>
//     </div>
//   )
// }
