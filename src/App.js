
import './App.css';
import './estilo/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Footer from './componentes/Footer/Footer';
import Index from './componentes/Home/index';
import Contacto from './componentes/contacto/Contacto';
import PreguntasFrecuentes from './componentes/PreguntasFrecuentes/PreguntasFrecuntes';


function App() {
  const [show, setShow] = useState('/lista')
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<Index />}/>
         <Route path='/productos' element={<ItemListContainer />} />
         <Route path='/contacto' element={<Contacto/>}/>
         <Route path='/PreguntasFrecuentes' element={<PreguntasFrecuentes/>}/>
          <Route path='/detalle/:productid' element= {<ItemDetailContainer />} />
          <Route path='*' element={<h1>error 404</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
