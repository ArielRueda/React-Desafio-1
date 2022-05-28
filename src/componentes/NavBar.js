import logo from './imagenes/desktop-logo.png';
import NavBarCss from './NavBar.css';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import CartContext from '../Context/CartContext.js';
import {firestoreDb} from '../services/firebase'
import {collection,getDocs} from 'firebase/firestore'

function NavBar() {
    const [categories, setCategories] = useState([]);

    const { getQuantity}=useContext(CartContext)
    useEffect(() => {
        

        getDocs(collection(firestoreDb, 'categories')).then(response => {
            const categories = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setCategories(categories)
            console.log(categories)
        })
    }, [])
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
                     
                         <Link to='/' className='nav-link'>Home</Link>
                         <div>
                    <Link to='/productos' className="navLink">Productos</Link>
                    { categories.map(cat => <Link key={cat.id} to={`/category/${cat.id}`} className="navLink">{cat.description}</Link>) }
                </div>
                          
                        
                      <Link to='/PreguntasFrecuentes' className='nav-link'>PreguntasFrecuentes</Link>

                    </div>
                </div>
              {getQuantity()>0?<CartWidget />:null}
            </div>

        </nav>
    );
}
export default NavBar