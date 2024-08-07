import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './Order.css';

 const URI = 'https://martinandresconti.alwaysdata.net/items/'
// const URI = 'http://localhost:3000/items/'

export default function Order() {
  const [items, setItems] = useState([]);
  const { email } = useParams()

  useEffect(()=>{
    getAllItems()
  },[])



  //procedimiento para buscar todos los items del menu
  const getAllItems = async () =>{
    const res = await axios.get(URI+email)
    console.log(res.data);
    setItems(res.data)
  }


  //procedimiento para eliminar un item
  const deleteItem = async (id) => {
    await axios.delete(`${URI}${id}`)
    getAllItems()
  }

console.log(items);

  return (
    <div className="ordercontainer">
      <Link to={`/add/${email}`} className="title">Agregar Cerveza</Link>
      
      {items.length > 0 && (
        items.map( (item) =>(
            <div key={item.id} className="listcontainer">
              <div className="listitems">
                <p>{item.cerveza}</p>
                <p>{item.pinta}</p>
              </div>
              <div className="listbuttons">                
                <Link to={`/edit/${item.id}/${email}`} className="editar">Editar</Link>
                <button onClick={()=>deleteItem(item.id)} className="delete">Delete</button>
              </div>
            </div>
        ))
      )
      }
      
      <Link to={'/'} className="title">Ir a inicio</Link>
    </div>
  )
}
