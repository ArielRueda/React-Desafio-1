import './Home.css'
import portada from '../imagenes/portada2.jpg'
import mesa from '../imagenes/mesa_recorte.jpg'

const Home = () => {
    return <div>
        <div>
            <div >
                
                <div className="portada mt-5">
                <p className="texto-main">
                        <spam>MUNAYKA </spam> es una marca que se nutre de un profundo amor por una de las técnicas más nobles y antiguas desarrolladas por el hombre: la <spam>cerámica</spam>.</p>
                    <img   src={portada} />
                </div>
            </div>
            <div className='separador'>
                
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
            <div className="mapa-index">

                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.6919456807727!2d-58.42360498532867!3d-34.73815857212985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd9ccc66f733%3A0xc0f7db5701d0cba2!2sRodr%C3%ADguez%20Pe%C3%B1a%201842%2C%20B1828HJN%20Villa%20Centenario%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1642755367568!5m2!1ses-419!2sar"
                     allowFullScreen="" loading="lazy" ></iframe>
            </div>

        </div>
    </div>
}

export default Home