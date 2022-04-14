import '../imagenes/1.png';
import "../../estilo/bootstrap.min.css"
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList.js'
import { getProducts } from '../asyncMock.js'
import { useEffect, useState } from 'react';




const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error);
        })
    }, [])
   

    return (
        <div className='container-ps mt-5'>
            
            

                <ItemList products={products} />
             

        
         
        </div>


    );
}

export default ItemListContainer