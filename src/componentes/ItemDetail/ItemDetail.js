import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import Contador from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = (products) => {
    const handelOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`);
    }
    return (
        <div class="card1" >
            <img src={products.img} alt={products.name} className='imagen-card' />
            <div class="card-body1">
                <h3 className="name-card1" >{products.name}</h3>
                <p class="card-text1">{products.description}</p>
                <Contador initial={0} stock={products.stock} onAdd={handelOnAdd} />
            </div>
        </div>

    )
}
export default ItemDetail