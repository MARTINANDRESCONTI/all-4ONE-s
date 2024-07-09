import React from 'react'
import beers from '../assets/beers'
import './Items.css'

export default function Items() {

  return (
    <div className='itemcontainer'>
      {beers.map(b=>(
        <div key= {b.cerveza} className='item'>
          <h3>
            {b.cerveza}
          </h3>
          <p>
            {b.precio}
          </p>
        </div>
      ))}
    </div>
  )
}
