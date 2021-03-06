
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'
import { Spinner } from 'reactstrap';

const ItemDetailContainer = ({ setCart, cart }) => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    
    const { productid } = useParams()
    

    useEffect(() => {
        setLoading(false)
       getDoc(doc(firestoreDb,'products',productid)).then(response=>{
         
           const products={id:response.id ,...response.data()}
           setProduct(products)
        })
           return(()=>{
               setProduct()
       })
    }, [productid])
    if(loading) {
        return <div className='loadingPadre'>
            <div className='loadingHijo'>
            <Spinner color="dark" /> 
          
            </div>
            </div>
    }

  

    return (
        <div className="ItemDetailContainer" >
            {  loading ? 
                    <h1 className='itemDetailContainerText'> <Spinner/>Cargando...</h1> :
                product 
                    ? <ItemDetail  {...product} setCart={setCart} cart={cart}/>  :
                    //  <h1>El producto no existe</h1> 
                    loading
            }
        </div>
    )    
}
export default ItemDetailContainer