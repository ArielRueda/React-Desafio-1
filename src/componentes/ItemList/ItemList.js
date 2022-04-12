import Item from '../Item/Item.js'
import '../../estilo/bootstrap.min.css'
import './ItemList.css'
 

const ItemList=({products})=>{
    return(
        <div className='row' >
            {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    );
}
export default ItemList