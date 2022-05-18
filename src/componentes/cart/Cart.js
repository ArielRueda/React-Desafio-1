import { useContext, useState } from "react"
import CartContext from "../Context/CartContext"
import '../../estilo/bootstrap.min.css'
import './cart.css'
import { addDoc, documentId, writeBatch, where, query, collection, Timestamp, getDocs } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase/index"
import { Link } from "react-router-dom"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const Cart = () => {
    const [loading, setLoading] = useState(false)

    const { cart, removeItem, getQuantity, clearCart } = useContext(CartContext)

    const createOrder = () => {
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Sebastian Zuviria',
                phone: '123456789',
                email: 'szvuria@gmail.com'
            },
            total: totalCart(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity})
                    } else {
                        outOfStock.push({ id: doc.id, ...dataDoc })
                    }
                })
            }).then(() => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(({ id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }



    const totalCart = () => {
        let total = 0;
        const prices = cart.forEach(prod => {
            total = total + (prod.price * prod.quantity)
        })
        console.log(total);
        return total;
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
            <button onClick={() => createOrder()} className="buttonGenerarOrden btn btn-secondary"><Link to='/Form'>Finalizar Compra</Link></button>
        </div>
    )
}
export default Cart