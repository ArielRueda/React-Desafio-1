import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getProductsById } from "../asyncMock";
import Contador from '../ItemCount/ItemCount'
import './ItemDetail.css'
import CartContext from "../../Context/CartContext";
import { getDocs } from "firebase/firestore";



const ItemDetail = ({ id, img, name, description, price, stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(0)
   

    const {addItem ,isInCart } = useContext(CartContext)

    const handelOnAdd = (count) => {
       
        setQuantity(count)
//  console.log(`se agregaron al carrito ${count} ${name} `);
        const productObj = {
            id, name, price,quantity:count,subtotal:price*count
        }
      addItem({...productObj,quantity:count})
    }

    return (
        <div className="card-detail" >
            <img className='imagen-detail' src={img} alt={name} />
            <div className="card-bodyDetail">
                <h3 className="name-cardDetail" >{name}</h3>
                <p className="card-textDetail">{description}</p>
                <p className="card-price">${price}</p>
                <p className="stock">Stock:{stock}  </p>
              
                 { isInCart(id) ?  
                    <div>
                        <Link to={'/cart'} className='link-carrito' >Ir al Carrito</Link>
                        <Link to={'/'} className='seguirComprando' >Seguir comprando</Link>
                    </div>
                    :
                    <Contador className='contador' initial={0} stock={stock} onAdd={handelOnAdd} />
                }
            </div>
        </div>

    )
}
export default ItemDetail