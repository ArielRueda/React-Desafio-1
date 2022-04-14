import './contacto.css';
import contacto from '../imagenes/contacto.jpg';

function Contacto() {
    return(
    <div>
        <div className="contacto d-flex">
            <img className="foto-contacto col-12 col-md-6 col-xl-6 " src={contacto} width=" " height=" " alt="Contacto "/>
            <div className="formulario col-12 col-md-6 col-xl-6 mx-3 ">
                <div>
                    <div className="mb-3 ">
                        <label for="exampleInputEmail1 " className="form-label ">Nombre y Apellido</label>
                        <input type="text " className="form-control " id="exampleInputEmail1 " aria-describedby="emailHelp "/>
                        <div id="emailHelp " className="form-text ">

                        </div>
                        <div className="mb-3 ">
                            <label for="exampleInputEmail1 " className="form-label ">Numero de telefono </label>
                       
                            <input type="number " className="form-control " id="exampleInputEmail1 " aria-describedby="emailHelp "/>
                            <div id="emailHelp " className="form-text ">.
                            </div>
                            <div className="mb-3 ">
                                <label for="exampleInputEmail1 " className="form-label ">Email </label>
                                <input type="email " className="form-control " id="exampleInputEmail1 " aria-describedby="emailHelp " placeholder="Ejemplo@example.com " required=" "/>
                                <div id="emailHelp " className="form-text "> We'll never share your email with anyone else.</div>
                                
                            </div>


                            <button type="submit " className="btn btn-primary ">Submit </button>
                       
                </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    
    
    

    )
}
export default Contacto