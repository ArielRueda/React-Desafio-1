import './item.css'
import '../../estilo/bootstrap.min.css'


const Item = ({ name, img, price }) => {

    return (
        <div className='col-12 col-md-6 col-xl-3 mt-3 '>
            <div className="card" >
                <img className='imagen' src={img} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <button className="verDetalle btn btn-primary">ver detalle</button>
                </div> 
            </div>
        </div>




    )
}
export default Item