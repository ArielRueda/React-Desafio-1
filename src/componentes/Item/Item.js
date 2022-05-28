import './item.css'

import '../../estilo/bootstrap.min.css'
import {Link } from 'react-router-dom'
import { getDocs } from 'firebase/firestore'



const Item = ({ name, img, price,id ,stock}) => {

    return (
        <div className='col-12 col-md-6 col-xl-3 mt-3 '>
            <div className="card" >
                <img className='imagen' src={img} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    
                    <Link to={`/detalle/${id}`} className="verDetalle btn btn-primary">ver detalle</Link >
                </div> 
            </div>
        </div>




    )
}
export default Item