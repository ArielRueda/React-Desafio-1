import { useContext } from "react"
import CartContext from "../Context/CartContext"

const Cart =()=>{
    const {cart} = useContext(CartContext)
    return(
        <>
        <h1>Cart</h1>
        <ul>
            {
                cart.map(prod=><li key={prod.id}>{prod.name} cantidad:{prod.quantity} precio unitario:{prod.price} subtotal:{prod.quantity*prod.price}</li>)
            }
        </ul>
        </>
    )
}
export default Cart