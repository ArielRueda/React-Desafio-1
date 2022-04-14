import './Index.css'
import portada from '../imagenes/portada2.jpg'
import mesa from '../imagenes/mesa_recorte.jpg'

function index() {
    return
    (
        <div>
            <div>
                <div>
                    <div className="portada mt-5">
                        <img src={portada}/>
                    </div>
                </div>
                <div>
                    <div className="texto-main">
                    
 
                         <p>  
                                 MUNAYKA  es una marca que se nutre de un profundo amor por una de las técnicas más nobles y antiguas desarrolladas por el hombre: la cerámica. En plena era tecnológica apostamos por el auténtico trabajo hecho a mano. Todas son piezas únicas
                                hechas a mano DUREZA + RESISTENCIA + IMPERMEABILIDAD Nuestra materia prima es la arcilla que cuando es sometida a altas temperaturas (más de 1000C) en hornos especiales, pierde todo su contenido de agua y se transforma en cerámica,
                                resultando un producto de extrema dureza y resistencia. Una cubierta de esmalte cerámico (vidriado) asegura total impermeabilidad </p>
                                
                        
                    </div>
                 </div>
            </div>


                    <div>
                        <div className="container2">
                            <div className="row align-items-center">
                                <div className="foto-izq-main col-12 col-md-6 col-xl-6">
                                    <img src={mesa} />

                                </div>
                                <div className="col-12 col-md-6 col-xl-6 ">

                                    <p className="texto-der-main">
                                        Esta página es una ventana para asomarse a nuestro mundo, lleno de colores y contacto con la naturaleza. Si bien todo comenzó como un pasatiempo, hoy somos felices y afortunadas de trabajar de lo que nos gusta. Objetos de cerámica hechos con amor para
                                        decorar tu casa y acompañarte en todos tus momentos.
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>
        </div>
        
                );
}
export default index