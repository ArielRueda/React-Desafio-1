import Item from "./Item/Item";
import imagen1 from './imagenes/1.png';
import imagen2 from './imagenes/15.6.jpg';
import imagen3 from './imagenes/5.9.jpg';
import imagen4 from './imagenes/4.5.jpg';
import imagen5 from './imagenes/9.jpg';
import imagen6 from './imagenes/10.jpg';
import imagen7 from './imagenes/22.jpg';
import imagen8 from './imagenes/21.jpg';
import imagen9 from './imagenes/14.jpg';
import imagen10 from './imagenes/24.jpg';
import imagen11 from './imagenes/11.jpg';
import imagen12 from './imagenes/13.7.jpg';


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
    },
    {
        id:4,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen4,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    {
        id:5,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen5,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    {
        id:6,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen6,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    {
        id:7,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen7,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    {
        id:8,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen8,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    {
        id:9,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen9,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    {
        id:10,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen10,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },{
        id:11,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen11,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    {
        id:12,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen12,
        stock:18,
        description:'tazas bicolor con tonalidades azul y blanca .apto para microondas'
    },
    

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
            resolve(products.find(prod=>prod.id==id))
        }, 3000);
    })

    
}
export default products