import Item from "./Item/Item";
import imagen from './imagenes/1.png';
const products=[
    {
        id:1,
        name:'bowl',
        price: 840,
        category:'vajilla',
        img:imagen,
        stock:15,
        description:'bowl ceramico pintado a mano'
    }
]
export const getProducts=()=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })

    
}
export default products