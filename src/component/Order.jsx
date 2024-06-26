import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = 'https://martinandresconti.alwaysdata.net/items/'
// const URI = 'http://localhost:3000/items/'

export default function Order() {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    getAllItems()
  },[])

  //procedimiento para buscar todos los items del menu
  const getAllItems = async () =>{
    const res = await axios.get(URI)
    console.log(res.data);
    setItems(res.data)
  }


  //procedimiento para eliminar un item
  const deleteItem = async (id) => {
    await axios.delete(`${URI}${id}`)
    getAllItems()
  }

  return (
    <div>
      <Link to={'/add'}>Agregar Cerveza</Link>
      {items.map( (item) =>(
          <div key={item.id}>
            <p>{item.cerveza}</p>
            <p>{item.pinta}</p>
            <Link to={`/edit/${item.id}`}>Editar</Link>
            <button onClick={()=>deleteItem(item.id)}>Delete</button>
          </div>
      )

      )}
    </div>
  )
}
