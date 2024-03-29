import  carrito from './carrito.png';
import  '../NavBar.css';
import {useContext} from 'react';
import CartContext from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const  CartWidget=()=> {
    const { getQuantity }=useContext(CartContext)
    return(
<div className='cartWidget'>
    <p className='carrito'>{getQuantity()}</p>
    <Link to='/cart'><img className='imagen-carrito' src={carrito} alt="carrito"/></Link>

     </div>
    );
}
export default CartWidget