import { useContext, useState } from "react"
import CartContext from "../Context/CartContext"
import '../../estilo/bootstrap.min.css'
import './cart.css'

const Cart =()=>{
    const {cart , removeItem,getQuantity} = useContext(CartContext)
    if (getQuantity()===0){
        return(
            <h1 className="error-carrito">No hay Productos Seleccionados</h1>
        )
    }
const totalCart=()=>{
    let total=0;
    const prices=cart.forEach(prod=>{
        total=total+(prod.price*prod.quantity)
    })
    console.log(total);
    return total;
}

    return(
        <div className="Cart">
        <h1 >Cart</h1>
        <ul className="lista">
            {
                cart.map(prod=><li key={prod.id}>{prod.name} cantidad:{prod.quantity} precio unitario:{prod.price} subtotal:{prod.quantity*prod.price}  <button  className=" btn btn-primary" onClick={()=>{removeItem(prod.id)}}>x</button></li>,
                )
            }
            <li>Total:{totalCart()}</li>
           
        </ul>
        </div>
    )
}
export default Cart