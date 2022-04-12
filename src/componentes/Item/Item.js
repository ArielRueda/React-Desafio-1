 import './item.css'
 import '../../estilo/bootstrap.min.css'


const Item=({ name,img,price})=>{
   
    return (
      
        
          <div class="col">
          <picture >
                <img className='imagen' src={img} alt={name} />
            </picture>
            <p className='precio'>{price}</p>
            <button   className="verDetalle btn btn-primary">ver detalle</button>
          </div>
         
      
     
    )
}
export default Item