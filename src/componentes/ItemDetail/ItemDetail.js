import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import Contador from '../ItemCount/ItemCount'

const ItemDetail =(products )=>{
    const handelOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`);
    }
    return(
        <div>
            <h2 className="name-card" >{products.name}</h2>
            <img src={products.img} alt={products.name} className='imagen-card'/>
            <p>{products.category}</p>
            <p className="price-card">{products.price}</p>
            <p>{products.description}</p>
            <Contador initial={0} stock={products.stock} onAdd={handelOnAdd}/>
        </div>
    )

}
export default ItemDetail