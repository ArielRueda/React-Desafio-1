
import './App.css';
import bootstrap from './estilo/bootstrap.min.css';
import Contador from './componentes/ItemCount/ItemCount';
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  const handelOnAdd =(quantity)=>{
    console.log(`se agregaron ${quantity} productos`);
  }
  return (
    <div className="App">
     
      <header className="App-header">
    
  <NavBar/>
  

    

  <ItemListContainer greeting={"Desafio 4"}/>
  <Contador initial={0} stock={15} onAdd={handelOnAdd} />
       
      </header> 
    </div>
  );
}

export default App;
