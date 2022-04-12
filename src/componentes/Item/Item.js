 import './item.css'


const Item=({ name,img,price})=>{
   
    return (
        <section className='tarjeta1'>
            <picture >
                <img className='imagen' src={img} alt={name} />
            </picture>
            <p className='precio'>{price}</p>
            <button   className="verDetalle btn btn-primary">ver detalle</button>
        </section>
    )
}
export default Item