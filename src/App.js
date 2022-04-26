
import './App.css';
import './estilo/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/NavBar';
import Cart from './componentes/Cart/Cart';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { useState , createContext} from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import Contacto from './componentes/contacto/Contacto';
import PreguntasFrecuentes from './componentes/PreguntasFrecuentes/PreguntasFrecuntes';
import {CartContextProvider} from './componentes/Context/CartContext'

function App() {
  const [cart ,setCart]=useState([])
  
 
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<Home />}/>
         <Route path='/productos' element={<ItemListContainer />} />
         <Route path='/contacto' element={<Contacto/>}/>
         <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes/>}/>
          <Route path='/detalle/:productid' element= {<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<h1>error 404</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;
