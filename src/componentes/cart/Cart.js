import { useContext } from "react"
import CartContext from "../Context/CartContext"
import '../../estilo/bootstrap.min.css'

const Cart =()=>{
    const {cart , removeItem} = useContext(CartContext)
    if (cart.lengh===0){
        return(
            <h1>No hay Productos Seleccionados</h1>
        )
    }

    return(
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod=><li key={prod.id}>{prod.name} cantidad:{prod.quantity} precio unitario:{prod.price} subtotal:{prod.quantity*prod.price} <button  className=" btn btn-primary" onClick={()=>{removeItem(prod.id)}}>x</button></li>)
            }
           
        </ul>
        </>
    )
}
export default Cart