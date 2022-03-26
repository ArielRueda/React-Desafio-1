import gif from './componentes/imagenes/giphy.gif';
import './App.css';
import bootstrap from './estilo/bootstrap.min.css';
import logo from './componentes/imagenes/desktop-logo.png';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
  <NavBar/>
    

        <img src={gif} className="App-logo" alt="logo" />
        <p>
          Desafio 1
        </p>
       
      </header>
    </div>
  );
}

export default App;
