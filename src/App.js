import gif from './componentes/imagenes/giphy.gif';
import './App.css';
import bootstrap from './estilo/bootstrap.min.css';
import logo from './componentes/imagenes/desktop-logo.png';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     
      <header className="App-header">
    
  <NavBar/>
  

    

  <ItemListContainer greeting={"Desafio 3"}/>
       
      </header> 
    </div>
  );
}

export default App;
