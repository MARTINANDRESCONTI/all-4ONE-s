import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

// const URI = 'https://martinandresconti.alwaysdata.net/items/'
const URI = 'http://localhost:3000/items/'

export default function EditItem() {
  const [cerveza, setCerveza] = useState('')
  const [pinta, setPinta] = useState('')
  // const [mesa, setMesa] = useState('')

  const navigate = useNavigate()
  const { id, email } = useParams()


  const updateItem = async (e) => {
    e.preventDefault()
    await axios.put(URI+id,{
      cerveza,
      // mesa,
      pinta
    })
    navigate(`/home/${email}`)
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
          />          
        </div>
        <div>
          <label>Pinta</label>
          <input 
            value={pinta}
            onChange={(e) =>setPinta(e.target.value)}
          />          
        </div>
        {/* <div>
          <label>Mesa</label>
          <input 
            value={mesa}
            onChange={(e) =>setMesa(e.target.value)}
          />          
        </div> */}
        <button>Actualizar Orden </button>

      </form>
    </div>
    </div>
  )
}
