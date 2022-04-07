import Item from '../Item/Item.js'
 

const ItemList=({products})=>{
    return(
        <div>
            {products.map(prod => <Item key={prod.id}{...prod}/>)}
        </div>
    );
}
export default ItemList