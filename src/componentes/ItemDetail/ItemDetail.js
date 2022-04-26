import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getProductsById } from "../asyncMock";
import Contador from '../ItemCount/ItemCount'
import './ItemDetail.css'
import CartContext from "../Context/CartContext";



const ItemDetail = ({ id, img, name, description, price, stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(0)
   

    const {addItem ,isInCart } = useContext(CartContext)

    const handelOnAdd = (count) => {
       
        setQuantity(count)
 console.log(`se agregaron al carrito ${onAdd} ${name} `);
        const productObj = {
            id, name, price
        }
      addItem({...productObj,quantity:count})
    }

    return (
        <div className="card1" >
            <img className='imagen-card1' src={img} alt={name} />
            <div className="card-body1">
                <h3 className="name-card1" >{name}</h3>
                <p className="card-text1">{description}</p>
                <p className="card-price">${price}</p>
                {isInCart(id) > 0 ? <Link to='/cart' className="link-carrito">ir al carrito</Link> : <Contador initial={0} stock={stock} onAdd={handelOnAdd} />}
            </div>
        </div>

    )
}
export default ItemDetail