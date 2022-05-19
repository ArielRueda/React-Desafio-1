import './PreguntasFrecuentes.css';
import '../../estilo/bootstrap.min.css'
import Accordion from 'react-bootstrap/Accordion'

function PreguntasFrecuentes() {
    return (
        <section>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Realizan entregas en todo el país?</Accordion.Header>
    <Accordion.Body>
    Sí, llegamos a todo el territorio argentino. En los envíos al interior, contamos con embalaje especial y preparado, para que las piezas lleguen en perfectas condiciones. Normalmente realizamos el envío por Andreani, contratando seguro a la carga. Una
                                        vez que realices la compra, nos contactaremos a la brevedad para cotizar el servicio de envío al interior y embalaje especial.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>¿Cuánto demora en llegar mi producto?</Accordion.Header>
    <Accordion.Body>
    Se consideran entre 10 a 15 días para la producción de cada pieza, o tal vez menos tiempo! Haremos lo posible porque llegue lo más pronto posible.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

<Accordion defaultActiveKey="3">
  <Accordion.Item eventKey="3">
    <Accordion.Header>¿Qué métodos de pago aceptan?</Accordion.Header>
    <Accordion.Body>
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
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>¿que cuidados debo tener ?</Accordion.Header>
    <Accordion.Body>
    <ul>
                                            <li> ⚠️CHOQUE TÉRMICO
                                                <hr /> Evitá los cambios bruscos de temperatura, por ej: al terminar tu infusión tu taza queda caliente, no mojarla de inmediato con agua fría.
                                            </li>
                                            <li> ⚠️ MICROONDAS Y HORNO
                                                <hr /> Las piezas son aptas para microondas u horno pero no por tiempos prolongados, lo ideal es que las uses sólo para calentar por unos minuto</li>
                                            <li>⚠️ GOLPES
                                                <hr /> Cuidala de los golpes, a veces a simple vista no se vé. Pero un pequeño golpecito puede marcar el esmalte y hacer que se craquele con el uso. Igualmente si se craquela no afecta al buen funcionamiento de la pieza</li>
                                        </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

               
        </section>
    )
}
export default PreguntasFrecuentes