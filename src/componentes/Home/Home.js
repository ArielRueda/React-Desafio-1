import './Home.css'
import portada from '../imagenes/portada2.jpg'
import mesa from '../imagenes/mesa_recorte.jpg'
import torno from '../imagenes/postal21.jpg'
import artesana from '../imagenes/postal33.jpg'
import Carrousel from '../Carrousel/carrousel';

const Home = () => {
    return (
    <div>
        <div></div>
        <div></div>
                       
        <div className="portada ">
            <div className="capaTranslucida"></div>
            <p className="texto-main">
                        <spam>MUNAYKA </spam> es una marca que se nutre de un profundo amor por una de las técnicas más nobles y antiguas desarrolladas por el hombre: la <spam>cerámica</spam>.
            </p>
                <img   src={portada} />
        </div>
                <div className="divisionPadre"><p className='separador'></p></div>
        
            <div className="container2">
                <div className="row">
                    <div className="descripcion col-12 col-md-6 col-xl-6"><p className='textoArtesana '> En plena era tecnológica apostamos por el auténtico trabajo hecho a mano. Todas son piezas únicas hechas a mano destacando siempre la dureza , resistencia e impermeabilidad</p></div>
                    <div className="col-12 col-md-6 col-xl-6"></div>
                    <div className="artesana col-12 col-md-6 col-xl-6"><img className='fotoArtesana' src={artesana} /></div>
                    <div className="Torno col-12 col-md-6 col-xl-6" ><img className='fotoTorno' src={torno} /></div>
                    <div className="col-12 col-md-6 col-xl-6"></div>
                    <div className=" textoDerTorno col-12 col-md-6 col-xl-6"><p className='textoTorno'>Nuestra materia prima es la arcilla que cuando es sometida a altas temperaturas (más de 1000C) en hornos especiales, pierde todo su contenido de agua y se transforma en cerámica,</p></div>

                    <div className="foto-izq-main col-12 col-md-6 col-xl-6">
                        <img className='fotoMesa' src={mesa} />

                    </div>
                   
                   
                    <div className="textoDerMesa col-12 col-md-6 col-xl-6 ">

                        <p className="texto-der-main">
                            Esta página es una ventana para asomarse a nuestro mundo, lleno de colores y contacto con la naturaleza. Si bien todo comenzó como un pasatiempo, hoy somos felices y afortunadas de trabajar de lo que nos gusta. Objetos de cerámica hechos con amor para
                            decorar tu casa y acompañarte en todos tus momentos.
                        </p>

                    </div>
                   

                </div>
            </div>
            <div className='divisionPadre2'><p className='separador2'></p></div>
            <Carrousel/>
            <div className='divisionPadre2'><p className='separador2'></p></div>
           

        
    </div>
    );
}

export default Home