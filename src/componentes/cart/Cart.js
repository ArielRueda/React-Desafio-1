import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import '../../estilo/bootstrap.min.css'
import './cart.css'
import { Link } from "react-router-dom"


const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, totalCart,removeItem, getQuantity, clearCart } = useContext(CartContext)

   

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }



    
     

    return (
        <div className="Cart">
            
            <div  className="guia" aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to="/" className="guia">Home</Link></li>
    <li className="breadcrumb-item active" aria-current="page"><Link to='/productos' className="guia">Productos</Link></li>
  </ol>
</div>
            <h1 >Cart</h1>
            <ul className="lista">
                {
                    cart.map(prod => <li className="listaDeCompras" key={prod.id}>{prod.name} cantidad:{prod.quantity} precio unitario:{prod.price} subtotal:{prod.quantity * prod.price}  <button className=" btn btn-primary" onClick={() => { removeItem(prod.id) }}>x</button></li>,
                    )
                }
                <li className="totalCompra"><big>Total</big>:{totalCart()}</li>

            </ul>
            <button onClick={() => clearCart()} className="buttonLimpiarCarrito btn btn-secondary">Limpiar carrito</button>
           <button  className="buttonVolverAproductos  btn btn-secondary"><Link to='/productos' className="linkProductos">Volver a Productos</Link></button>
            <button  className="buttonGenerarOrden btn btn-secondary"><Link className="generarOrden" to='/Form'>Finalizar Compra</Link></button>
        </div>
    )
}
export default Cart