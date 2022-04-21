import  carrito from './carrito.png';
import  '../NavBar.css';
import {useContext} from 'react';
import CartContext from '../Context/CartContext';

const  CartWidget=()=> {
    const { getQuantity }=useContext(CartContext)
    return(
<div>
    <img className='imagen-carrito' src={carrito} alt="carrito"/>
<p className='carrito'>{getQuantity()}</p>
     </div>
    );
}
export default CartWidget