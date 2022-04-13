import logo from './imagenes/desktop-logo.png';
import NavBarCss from './NavBar.css';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom'

function NavBar() {
    return (

        <nav id="barra" className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <Link to='/' className='navbar-brand'> <img src={logo} alt="logo" /></Link>
          
                   
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div id="items" className="navbar-nav">
                        {/* <a className="nav-link active selected" aria-current="page" href="index">Home</a> */}
                        {/* [ <a className="nav-link" href="productos.html">Productos</a>
                        <a className="nav-link" href="sobrenosotros.html">Sobre Nosotros</a>
                        <a className="nav-link" href="contacto.html">Contacto</a>
                        <a className="nav-link" href="preguntasfrecuentes.html">Preguntas Frecuentes</a>] */}
                         <Link to='/' className='nav-link'>Home</Link>
                         <Link to='/productos' className='nav-link'>Productos</Link>
                       

                    </div>
                </div>
                <CartWidget />
            </div>

        </nav>
    );
}
export default NavBar