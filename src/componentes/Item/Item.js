import './item.css'

const Item=({ name,img})=>{
    return (
        <section className='tarjeta1'>
            <picture>
                <img className="img-card1" src={img} alt={name} />
            </picture>
            <button className="verDetalle btn btn-primary">ver detalle</button>
        </section>
    )
}
export default Item