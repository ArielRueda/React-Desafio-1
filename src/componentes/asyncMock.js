import Item from "./Item/Item";
import imagen1 from './imagenes/1.png';
import imagen2 from './imagenes/15.6.jpg';
import imagen3 from './imagenes/5.9.jpg';
import imagen4 from './imagenes/4.5.jpg';
import imagen5 from './imagenes/18.jpg';
import imagen9 from './imagenes/14.jpg';



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
        name:"multiproposito",
        price:580,
        category:'Adorno',
        img:imagen9,
        stock:18,
        description:''
    },
    {
        id:6,
        name:"Florero",
        price:420,
        category:"Jardin",
        img:imagen5,
        stock:7,
        description:'Florero hecho a torno con un esmaltado con estilo rayado',


    }
  
    

]


const categories =[
    {id:'Cocina', description: "vajilla"},
    {id:'Cerámica', description: "Adorno"},
    {id:'Jardin', description: "Maceta"},
  


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