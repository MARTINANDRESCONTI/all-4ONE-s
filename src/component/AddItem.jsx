import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Items from './Items';
import './AddItem.css'

const URI = 'https://martinandresconti.alwaysdata.net/items/'
 //const URI = 'http://localhost:3000/items/'

export default function AddItem() {
  const [cerveza, setCerveza] = useState('')
  const [pinta, setPinta] = useState('')
  const navigate = useNavigate()
  const { email } = useParams()

  

  const postItem = async (e) =>{
    e.preventDefault()
    await axios.post(URI+email, {cerveza, 
      pinta })
    navigate(`/home/${email}`)
  }

  return (
    <div className='addcontainer'>
      <form onSubmit={postItem} className='formcontainer'>
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
        <button className='title'>Add item</button>
      </form>
      <Items />
    </div>
  )
}
