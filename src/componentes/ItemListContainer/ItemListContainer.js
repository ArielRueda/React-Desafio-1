import '../imagenes/1.png';
import "../../estilo/bootstrap.min.css"
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList.js'
// import { getProducts } from '../asyncMock.js'
import { useEffect, useState } from 'react';
import { getDocs ,collection ,query,where} from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';
import { useParams } from 'react-router-dom';




const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId))
            : collection(firestoreDb, 'products')

        getDocs(collectionRef)
            .then(response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setProducts(products)
            })
           
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    console.log(products);

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }

    return(
        <div className='ItemListContainer'>
            
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer