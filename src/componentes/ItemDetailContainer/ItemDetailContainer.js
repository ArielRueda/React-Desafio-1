import { getProductsById } from "../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect , useState } from "react";
const ItemDetailContainer = ()=>{
    const [product ,setProducts]= useState()

    useEffect(()=>{
        getProductsById().then(item=>{
            setProducts(item)
        })
        return(()=>{
            setProducts()
        })
    },[])
    return(
        <div>
            <ItemDetail{...product}/>
        </div>
    )
}
export default ItemDetailContainer