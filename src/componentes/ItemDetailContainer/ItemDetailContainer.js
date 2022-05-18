
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(false)
    
    const { productid } = useParams()
    console.log(productid);

    useEffect(() => {
       getDoc(doc(firestoreDb,'products',productid)).then(response=>{
           console.log(response);
           const products={id:response.id ,...response.data()}
           setProduct(products)
        })
           return(()=>{
               setProduct()
       })
    }, [productid])

    if(loading) {
        return(
            <h1>Cargando...</h1> 
        )
    }

    return (
        <div className="ItemDetailContainer" >
            { 
                product 
                    ? <ItemDetail  {...product} setCart={setCart} cart={cart}/> 
                    : <h1>El producto no existe</h1> 
            }
        </div>
    )    
}
export default ItemDetailContainer