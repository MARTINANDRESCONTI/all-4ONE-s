import React from 'react'
import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// const URI = 'https://martinandresconti.alwaysdata.net/items'
const URI = 'http://localhost:3000/items/'

export default function AddItem() {
  const [cerveza, setCerveza] = useState('')
  const [pinta, setPinta] = useState('')
  const navigate = useNavigate()

  const postItem = async (e) =>{
    e.preventDefault()
    await axios.post(URI, {cerveza, pinta})
    navigate('/')
  }

  return (
    <div>
      <form onSubmit={postItem}>
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
        <button>Add item</button>

      </form>
    </div>
  )
}
