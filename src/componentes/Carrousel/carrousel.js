import Carousel from 'react-bootstrap/Carousel';
import foto1 from '../imagenes/10.jpg'
import foto2b from '../imagenes/9.jpg'
import foto3 from '../imagenes/11.jpg'
import foto4 from '../imagenes/13.7.jpg'
import foto5 from '../imagenes/22.jpg'
import foto6 from '../imagenes/21.jpg'
import foto7 from '../imagenes/24.jpg'
import foto8 from '../imagenes/14.jpg'
import './carrousel.css'

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className= "carrousel__lista d-flex justify-content-evently">
        <img
          className="carrousel__fotos d-inline-block w-20 "       
          src={foto1}
          alt="First slide"
        />
        <img className="carrousel__fotos d-inline-block w-20"
        src={foto2b} 
        alt="second slide"
        />
        <img className="carrousel__fotos d-inline-block w-20"
        src={foto3}
        alt="third slide"
        />
        <img className="carrousel__fotos d-inline-block w-20 w-sm-30"
        src={foto4}
        alt="four slide"
        />
        </div>
        <Carousel.Caption>
         
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div className= "carrousel__lista d-flex justify-content-evently">
        <img
          className="carrousel__fotos d-inline-block w-20 "       
          src={foto5}
          alt="First slide"
        />
        <img className="carrousel__fotos d-inline-block w-20"
        src={foto6} 
        alt="second slide"
        />
        <img className="carrousel__fotos d-inline-block w-20"
        src={foto7}
        alt="third slide"
        />
        <img className="carrousel__fotos d-inline-block w-20 w-sm-30"
        src={foto8}
        alt="four slide"
        />
        </div>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Carrousel;