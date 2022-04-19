import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProductsById } from "../asyncMock";
import Contador from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = (products) => {
    const [quantity,setQuantity]=useState(0)
    const handelOnAdd = (count) => {
        console.log(`se agregaron al carrito `);
setQuantity(count)
    }
    return (
        <div className="card1" >
            <img className='imagen-card1' src={products.img} alt={products.name} />
            <div className="card-body1">
                <h3 className="name-card1" >{products.name}</h3>
                <p className="card-text1">{products.description}</p>
                <p className="card-price">${products.price}</p>
               {quantity>0?<Link to='/cart' className="link-carrito">ir al carrito</Link>: <Contador initial={0} stock={products.stock} onAdd={handelOnAdd} />}
            </div>
        </div>

    )
}
export default ItemDetail