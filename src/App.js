
import './App.css';
import  './estilo/bootstrap.min.css';

import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
 
  return (
    <div className="App">
     
      <header className="App-header">
    
  <NavBar/>
  

    

  
  
       
      </header> 
      <ItemListContainer/>
    </div>
  );
}

export default App;
