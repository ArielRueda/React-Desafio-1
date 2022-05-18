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
        name:"Multiproposito",
        price:380,
        category:'Adorno',
        img:imagen2,
        stock:18,
        description:'Coleccion libera tu arte multiproposito pintada con una base blanca y decorada con tonos rosas'
    },
    {
        id:3,
        name:'Plato',
        price:300,
        category:'vajilla',
        img:imagen3,
        stock:8,
        description:'Coleccion libera tu arte plato playo hecho con torno alfarero con diseños libres con colores ocre '
    },
    {
        id:4,
        name:'Cuenco',
        price:350,
        category:'vajilla',
        img:imagen4,
        stock:18,
        description:'Coleccion libera tu arte Cuenco rosa esmaltado a pincel con diseño en espiral'
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
        name:"Bowl",
        price:880,
        category:'vajilla',
        img:imagen6,
        stock:18,
        description:'coleccion oceano bowl pintado tonos blaco y azul , esmaltado con detalles de flores'
    },
    {
        id:7,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen7,
        stock:18,
        description:'Coleccion balance taza con asa en colores pasteles rosa,celeste y rosa'
    },
    {
        id:8,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen8,
        stock:18,
        description:'coleccion balance taza con asa con un color blanco mate con diseños personalizados'
    },
    {
        id:9,
        name:"multiproposito",
        price:580,
        category:'Adorno',
        img:imagen9,
        stock:18,
        description:''
    },
    {
        id:10,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen10,
        stock:18,
        description:'coleccion balance taza con asa con diseño rustico pintado con colores pasteles'
    },{
        id:11,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen11,
        stock:18,
        description:'tColeccion menos es mas set de vasija que contiene 3 tazas rayadas y una taza bitono'
    },
    {
        id:12,
        name:"tazas",
        price:480,
        category:'vajilla',
        img:imagen12,
        stock:18,
        description:'Coleccion descubri tu interior taza rustica con detalles en pinzel con bordes irregulares'
    },
    

]


const categories =[
    {id:'Cocina', description: "Cocina"},
    {id:'Cerámica', description: "Cerámica"},
    {id:'Baño', description: "Baño"},
    {id:'Jardín', description: "Jardín"},
    {id:'Accesorios', description: "Accesorios"}


]
export const getProducts=(productos)=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(categories)
        }, 200);
    })

    
}
export const getProductos = (categoryId)=>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            resolve(categoryId ? products.filter(prod=> prod.category === categoryId): products)
        },200)
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