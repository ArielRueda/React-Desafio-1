
import './App.css';
import './estilo/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { useState } from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Footer from './componentes/Footer/Footer';


function App() {
  const [show, setShow] = useState('/lista')
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path='/' element={<h1>Home</h1>}/>
         <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/detalle/:productid' element= {<ItemDetailContainer />} />
          <Route path='*' element={<h1>error 404</h1>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
