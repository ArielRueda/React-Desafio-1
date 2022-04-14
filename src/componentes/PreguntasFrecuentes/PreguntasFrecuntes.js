import './PreguntasFrecuentes.css';
import '../../estilo/bootstrap.min.css'

function PreguntasFrecuentes() {
    return(
        <section>
        <div className="container-pf mt-3 mx-2">
            <div className="row">
                <div className="texto-pf">

                    <div>
                        <p>
                        <button className="btn-pf mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                          <h5>Realizan entregas en todo el país?</h5>
                        </button>
                       </p>
                        <div className="collapse" id="collapse1">
                            <div className="card card-body">
                                Sí, llegamos a todo el territorio argentino. En los envíos al interior, contamos con embalaje especial y preparado, para que las piezas lleguen en perfectas condiciones. Normalmente realizamos el envío por Andreani, contratando seguro a la carga. Una
                                vez que realices la compra, nos contactaremos a la brevedad para cotizar el servicio de envío al interior y embalaje especial.
                            </div>
                        </div>
                    </div>
                    <div>


                        <button className="btn-pf mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                           <h5> ¿Cuánto demora en llegar mi producto?</h5>
                        </button>

                        <div className="collapse" id="collapse2">
                            <div className="card card-body">
                                Se consideran entre 10 a 15 días para la producción de cada pieza, o tal vez menos tiempo! Haremos lo posible porque llegue lo más pronto posible.
                            </div>
                        </div>
                    </div>
                    <div>


                        <button className="btn-pf mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                 <h5>¿Qué métodos de pago aceptan?</h5>
 
                            </button>

                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                
                                    <ul>
                                        <li>
                                            Aceptamos tarjeta de credito/debito
                                        </li>
                                        <li>
                                            Déposito o Transferencia bancaria", tenes 10% de descuento
                                        </li>
                                        <li>
                                            mediante Mercado Pago.
                                        </li>
                                    </ul>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="btn-pf mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse1">
                          <h5>¿que cuidados debo tener ?</h5>
                        </button>

                        <div className="collapse" id="collapse3">
                            <div className="card card-body">
                                <ul>
                                    <li> ⚠️CHOQUE TÉRMICO
                                        <hr/> Evitá los cambios bruscos de temperatura, por ej: al terminar tu infusión tu taza queda caliente, no mojarla de inmediato con agua fría.
                                    </li>
                                    <li> ⚠️ MICROONDAS Y HORNO
                                        <hr/> Las piezas son aptas para microondas u horno pero no por tiempos prolongados, lo ideal es que las uses sólo para calentar por unos minuto</li>
                                    <li>⚠️ GOLPES
                                        <hr/> Cuidala de los golpes, a veces a simple vista no se vé. Pero un pequeño golpecito puede marcar el esmalte y hacer que se craquele con el uso. Igualmente si se craquela no afecta al buen funcionamiento de la pieza</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>
    )
}
export default PreguntasFrecuentes