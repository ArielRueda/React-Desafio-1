import producto from '../imagenes/1.png';
import bootstrap from "../../estilo/bootstrap.min.css"
import  ItemListContainer from "./ItemListContainer.css"

const itemListContainer = (props) => {
    console.log(props.greeting)
    return (
        <div>
            <div>
                <h1>{props.greeting}</h1>
            </div>
            <div className="card">
                        <img src={producto} className="card-img-top" width="300px" height="300px" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">Coleccion "libera tu arte"  Bowl blanco con texturas y diseño pintado a mano en tonos verdes</p>
                        </div>
                    </div>

        </div>



    );
}

export default itemListContainer