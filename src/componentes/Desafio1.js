import React from 'react';
import '../estilo/Desafio1.css';
function Desafio1() {
    return(
        <div className='contenedor-imagenes'>
            <img
            className='pizarra'
            src={require('./imagenes/pizarra.jpg')} 
alt ='foto de pizarron'/>
        </div>
    );
    
}
export default Desafio1;