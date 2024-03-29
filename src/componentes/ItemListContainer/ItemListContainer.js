import '../imagenes/1.png';
import "../../estilo/bootstrap.min.css"
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react';
import { getDocs ,collection ,query,where} from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';
import { useParams } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import pantallaLoading from '../imagenes/desktop-logo-copia.png'





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
    

    if(loading) {
        return <div className='loadingPadre'>
            <div className='loadingHijo'>
            <img src={pantallaLoading} alt="logo" />
            <Spinner  className='spinner' color="dark" /> 
          
            </div>
            </div>
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