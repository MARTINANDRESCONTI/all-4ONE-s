import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Items from './Items';
import './EditItem.css'

 const URI = 'https://martinandresconti.alwaysdata.net/items/'
 //const URI = 'http://localhost:3000/items/'

export default function EditItem() {
  const [cerveza, setCerveza] = useState('')
  const [pinta, setPinta] = useState('')

  const navigate = useNavigate()
  const { id, email } = useParams()


  const updateItem = async (e) => {
    e.preventDefault()
    await axios.put(URI+id,{
      cerveza,
      pinta
    })
    navigate(`/home/${email}`)
  }

  return (
    <div className='editcontainer'>
      <div className='editcontainer'>
        <form onSubmit={updateItem} className='eformcontainer'>
          <div className='inputcontainer'>
            <label>Cerveza</label>
            <input 
              value={cerveza}
              onChange={(e) =>setCerveza(e.target.value)}   
              type='text'
              required         
            />          
          </div>
          <div className='inputcontainer'>
            <label>Pinta</label>
            <input 
              value={pinta}
              onChange={(e) =>setPinta(e.target.value)}
              type='number'
              required
            />          
          </div>
          <button className='title'>Actualizar </button>
        </form>
      </div>
      <Items />
    </div>
  )
}
