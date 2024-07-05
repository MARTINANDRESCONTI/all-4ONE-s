import React from 'react'
import beers from '../beers'

export default function Items() {

  return (
    <div>
      {beers.map(b=>(
        <div key= {b.cerveza}>
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
