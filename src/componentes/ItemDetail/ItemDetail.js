import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import Contador from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = (products) => {
    const handelOnAdd = (quantity ) => {
        console.log(`se agregaron ${quantity} productos`);
    }
    return (
        <div className="card1" >
            <img className='imagen-card1'src={products.img} alt={products.name}  />
            <div className="card-body1">
                <h3 className="name-card1" >{products.name}</h3>
                <p className="card-text1">{products.description}</p>
                <p className="card-price">${products.price}</p>
                <Contador initial={0} stock={products.stock} onAdd={handelOnAdd} />
            </div>
        </div>

    )
}
export default ItemDetail