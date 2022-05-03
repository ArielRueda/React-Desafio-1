import '../imagenes/1.png';
import "../../estilo/bootstrap.min.css"
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList.js'
// import { getProducts } from '../asyncMock.js'
import { useEffect, useState } from 'react';
import { getDocs ,collection ,query,where} from 'firebase/firestore';
import { firestoreDb } from '../../services/firebase';
import { useParams } from 'react-router-dom';




const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        // getProducts().then(prods => {
        //     setProducts(prods)
        // }).catch(error => {
        //     console.log(error);
        // })
        const collectionRef =categoryId 
        ? query(collection(firestoreDb,'products'),where('category'),'==',categoryId)
        :collection(firestoreDb,'products')
        getDocs(collectionRef).then(response=>{
            console.log(response);
            const products = response.docs.map(doc=>{
                return{id:doc.id,...doc.data()}
               
            }) 
           setProducts(products);
        })
    }, [])
   

    return (
        <div className='container-ps mt-5'>
            
            

                <ItemList products={products} />
             

        
         
        </div>


    );
}

export default ItemListContainer