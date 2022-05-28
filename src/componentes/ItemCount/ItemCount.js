import { useState } from "react";
import   "./ItemCount.css"


const Contador=({initial,stock,onAdd})=>{
    const  [count,setCount]=useState(initial)
    const decrement =()=>{
        if (count>0) {
             setCount(count-1)
        }
       
    }
    const increment=()=>{
  if (count<stock) {
         setCount(count+1)
        
  }
         
        
    }
return(
    <div>
        <div className="botones">
            <button className="btn btn-primary botonDeMenos " onClick={decrement}>-</button>
            <p className="marcador">{count}</p>
            <button className="botonDeMas btn btn-primary" onClick={increment}>+</button>
        </div>
        <div>
            <button className="botonAgregar btn btn-primary" onClick={()=>onAdd(count)}>Agregar al carrito</button>
            
        </div>
    </div>
)
}
export default Contador