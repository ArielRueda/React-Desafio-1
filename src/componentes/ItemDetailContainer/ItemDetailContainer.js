import { getProductsById } from "../asyncMock";
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from "react";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [product, setProducts] = useState()
    const [loading, setLoading] = useState(true)

    const { productid } = useParams()

    useEffect(() => {
        getProductsById(productid).then(item => {
            setProducts(item)
        }).catch(err => {
            console.log(err);
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setProducts()
        })
    }, [])
    return (
        <div className="ItemDetailContainer">
            <h1></h1>
            {
                loading ?
                <div className="d-flex align-items-center">
                <h1>Loading...</h1>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
              </div>
                    :
                    product ?
                        <ItemDetail{...product} /> :
                        <h1>el producto no existe</h1>}

        </div>
    )
}
export default ItemDetailContainer