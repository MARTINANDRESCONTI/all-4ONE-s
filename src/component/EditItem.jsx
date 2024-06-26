import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://martinandresconti.alwaysdata.net/items/'
// const URI = 'http://localhost:3000/items/'

export default function EditItem() {
  const [cerveza, setCerveza] = useState('')
  const [pinta, setPinta] = useState('')
  // const [input, setInput] = useState({
  //   user_name: '',
  //   user_email:'',
  //   message:''
  // })
  const navigate = useNavigate()
  const { id } = useParams()

  //  const handleChange = (e)=>{
  //   setInput((prev) => {
  //     const newState = {
  //       ...prev,
  //       [e.target.name]: e.target.value
  //     } 

  //   return newState;
  //   })
  // }
  const updateItem = async (e) => {
    e.preventDefault()
    await axios.put(URI+id,{
      cerveza,
      pinta
    })
    navigate('/')
  }

    // useEffect( ()=>{
    //   getItemsById()
    // },[])

  // const getItemsById = async () =>{
  //   const res = await axios.get(URI+id)
  //   setCerveza(res.data.cerveza)
  //   setPinta(res.data.pinta)
  // }
  return (
    <div>EditItem
      <div>
      <form onSubmit={updateItem}>
        <div>
          <label>Cerveza</label>
          <input 
            value={cerveza}
            onChange={(e) =>setCerveza(e.target.value)}
            // placeholder='Write your message...'
            //     className={(errors.message) && style.errors }
            //     name='message'
            //     type='submit' 
            //     value={input.message} 
            //     onChange={handleChange}
          />          
        </div>
        <div>
          <label>Pinta</label>
          <input 
            value={pinta}
            onChange={(e) =>setPinta(e.target.value)}
          />          
        </div>
        <button>Actualizar Orden </button>

      </form>
    </div>
    </div>
  )
}
