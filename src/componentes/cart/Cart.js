import { useContext, useState } from "react"
import CartContext from "../Context/CartContext"
import '../../estilo/bootstrap.min.css'
import './cart.css'
import { addDoc,documentId, writeBatch,where,query,collection, Timestamp, getDocs } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

const Cart =()=>{
    const {cart , removeItem,getQuantity} = useContext(CartContext)

const addDocToCollecion=()=>{

    const collectionRef=collection(firestoreDb,'user')
    const objUser ={
        name:'bdbwd',
        phone:'238y294y3',
        email:'rhfoshff',
        date:Timestamp.fromDate(new Date())

    }
    const createOrder= ()=>{
        const objOrder={
    items:cart,
    buyer:{
        name:'adew',
        phone:'12324',
        email:'deffhuhfu'
    },
    total:totalCart(),
    date:new Date()
}
const ids=cart.map(prod=>prod.id)
const batch=writeBatch(firestoreDb)
const collectionRef=collection(firestoreDb,'products')
const outOfStock=[]
getDocs(query(collectionRef,where(documentId(),'in',ids)))
.then(response=>{
    response.docs.forEach(doc=>{
        const dataDoc=doc.data()
        const prodQuantity=cart.find(prod=>prod.id===doc.id)?.quantity
        if (dataDoc.stock>=prodQuantity) {
            batch.update(doc.ref,{stock:dataDoc.stock-prodQuantity})
            
        }else{
            outOfStock.push({id:doc.id,dataDoc})
        }
    })
})
    }
    addDoc(collectionRef,objUser)
    .then(response=>{
        console.log(response.id);
    })
   
    

}

    if (getQuantity()===0){
        return(
            <h1 className="error-carrito">No hay Productos Seleccionados</h1>
        )
    }
const totalCart=()=>{
    let total=0;
    const prices=cart.forEach(prod=>{
        total=total+(prod.price*prod.quantity)
    })
    console.log(total);
    return total;
}

    return(
        <div className="Cart">
        <h1 >Cart</h1>
        <ul className="lista">
            {
                cart.map(prod=><li key={prod.id}>{prod.name} cantidad:{prod.quantity} precio unitario:{prod.price} subtotal:{prod.quantity*prod.price}  <button  className=" btn btn-primary" onClick={()=>{removeItem(prod.id)}}>x</button></li>,
                )
            }
            <li>Total:{totalCart()}</li>
           
        </ul>
        </div>
    )
}
export default Cart