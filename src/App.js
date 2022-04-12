
import './App.css';
import './estilo/bootstrap.min.css';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { useState } from 'react';


function App() {
const [show, setShow]=useState('/lista')
  return (
    <div className="App">

      <header className="App-header">
        
              <NavBar />
         
  

      </header>
      <button onClick={()=>setShow('/lista')} className="lista btn-primary">list</button>
      <button onClick={()=>setShow('/detail')} className="detail btn-primary">detail</button>
   { show ==='/lista'? <ItemListContainer /> :null}
   { show === '/detail'?<ItemDetailContainer/> :null}

    </div>
  );
}

export default App;
