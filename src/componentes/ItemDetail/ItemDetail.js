import { useState, useEffect } from "react";
import { getProductsById } from "../asyncMock";
import Contador from '../ItemCount/ItemCount'

const ItemDetail =(name ,price, category,img,stock,description )=>{
    const handelOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`);
    }
    return(
        <div>
            <h2 className="name-card" >{name}</h2>
            <img src={img} alt={name} className='imagen-card'/>
            <p>{category}</p>
            <p className="price-card">{price}</p>
            <p>{description}</p>
            <Contador initial={0} stock={stock} onAdd={handelOnAdd}/>
        </div>
    )

}
export default ItemDetail