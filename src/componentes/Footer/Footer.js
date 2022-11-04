import { Link } from "react-router-dom";
import './Footer.css'
import instagram from '../imagenes/instagram-logo.png'
import mail from '../imagenes/mail-logo.png'
import ItemListContainer from "../ItemListContainer/ItemListContainer";


function Footer() {

    return(
        <div  className='footer'>

<div id="footer-producto" className="col-12">

<div className="munayka">
    <p> MunaykaCopyrights © 2021 Todos Los Derechos Reservados.</p>

 <ul className="d-flex justify-content-around">

        <li className="instagram">
            <a href="https://www.instagram.com/munayka/" target='_blank'><img src={instagram} alt="instagram"/></a>
        </li>
        {/* <li className="mail "> <img src={mail} alt="mail " width={18}  /> ruedamagali33@gmail.com</li> */}

    </ul>
</div>


<div className="redes ">

    {/* <ul className="d-flex justify-content-around">

        <li>
            <a href="https://www.instagram.com/munayka/" target='_blank'><img src={instagram} alt="instagram"/></a>
        </li>
        <li className=" mt-3"> <img src={mail} alt="mail " width={18}  /> ruedamagali33@gmail.com</li>

    </ul> */}
</div>


</div>


        </div>
    )
    
}
export default Footer