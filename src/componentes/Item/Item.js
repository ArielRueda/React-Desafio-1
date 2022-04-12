// import './item.css'


const Item=({ name,img,price})=>{
    return (
        <section className='tarjeta1'>
            <picture>
                <img  src={img} alt={name} />
            </picture>
            <p>{price}</p>
            <link to={`/detail/${id}`} className="verDetalle btn btn-primary">ver detalle</link>
        </section>
    )
}
export default Item