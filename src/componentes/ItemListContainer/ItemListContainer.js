import   '../imagenes/1.png';
import  "../../estilo/bootstrap.min.css"
import   "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList.js'
import  { getProducts } from  '../asyncMock.js'
import { useEffect, useState } from 'react';
import Contador from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        getProducts().then(prods=>{
            setProducts(prods)
        }).catch(error=>{
            console.log(error);
        })
    },[])
    const handelOnAdd =(quantity)=>{
        console.log(`se agregaron ${quantity} productos`);
      }
    
    return (
        <div className='card1'>
           
            <ItemList products={products}/>
            <Contador initial={0} stock={15} onAdd={handelOnAdd} />

        </div>



    );
}

export default ItemListContainer