import logo from './imagenes/desktop-logo.png';
import './NavBar.css';
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
            
        })
    }, [])
    return (
<Navbar id='barra' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to='./'><img src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  id="items"className="me-auto">
            <Nav.Link as={Link} to='./' >Home</Nav.Link>
            <Nav.Link as={Link} to='./productos'>Productos</Nav.Link>
            <Nav.Link as={Link} to='./PreguntasFrecuentes'>FAQ</Nav.Link>
            <Nav.Link  > {getQuantity()>0?<CartWidget />:null}</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    );
}
export default NavBar