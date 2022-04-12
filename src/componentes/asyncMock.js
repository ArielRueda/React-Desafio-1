import Item from "./Item/Item";
import imagen1 from './imagenes/1.png';
import imagen2 from './imagenes/9.jpg';
import imagen3 from './imagenes/18.jpg';

const products=[
    {
        id:1,
        name:'bowl',
        price: 840,
        category:'vajilla',
        img:imagen1,
        stock:15,
        description:'bowl ceramico pintado a mano'
    },
    {
        id:2,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen2,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    {
        id:3,
        name:'jarron',
        price:700,
        category:'macetas',
        img:imagen3,
        stock:8,
        description:'jarron con diseño '
    }
    

]
export const getProducts=()=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })

    
}
export const getProductsById=(id)=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(products.find(prod=>prod.id===id))
        }, 3000);
    })

    
}
export default products