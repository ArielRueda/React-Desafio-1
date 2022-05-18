
import 'bootstrap/dist/css/bootstrap.min.css'
import './estilo/bootstrap.min.css';
import './App.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/NavBar';
import Cart from './componentes/Cart/Cart';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './componentes/Footer/Footer';
import Home from './componentes/Home/Home';
import Form from './componentes/Form/Form'
import PreguntasFrecuentes from './componentes/PreguntasFrecuentes/PreguntasFrecuntes';
import { CartContextProvider } from './componentes/Context/CartContext'



function App() {
  const [cart, setCart] = useState([])


  return (
    <div className="App">
      <CartContextProvider>
        
        <BrowserRouter>
          <NavBar className='NavBar' />

          <Routes className='Routes'>
            <Route path='/' element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes />} />
            <Route path='/detalle/:productid' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/Form' element={<Form/>}/>
            <Route path='*' element={<h1>error 404</h1>} />
          </Routes>
          <Footer className='footer' />
        </BrowserRouter>
        
      </CartContextProvider>

    </div>
  );
}

export default App;
