import './item.css'
import { getProductsByIdS } from '../asyncMock'
import '../../estilo/bootstrap.min.css'
import {Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Item = ({ name, img, price,id }) => {

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