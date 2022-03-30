import  carrito from './carrito.png';
import NavBar from '../NavBar.css';
function CartWidget(params) {
    return(
<div><img src={carrito} alt="carrito"/>
<p className='carrito'>0</p>
     </div>
    );
}
export default CartWidget