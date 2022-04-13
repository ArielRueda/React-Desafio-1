import { getProductsById } from "../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect , useState } from "react";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [product ,setProducts]= useState()
    const [loading,setLoading]=useState(true)
    
    const {productid}=useParams()

    useEffect(()=>{
        getProductsById(productid).then(item=>{
            setProducts(item)
        }).catch(err=>{
            console.log(err);
        }).finally(()=>{
            setLoading(false)
        })
        return(()=>{
            setProducts()
        })
    },[])
    return(
        <div className="ItemDetailContainer">
            <h1></h1>
            {
                loading?
                <h1>cargando</h1>:
                product?
            <ItemDetail{...product}/>:
            <h1>el producto no existe</h1>}
           
        </div>
    )
}
export default ItemDetailContainer