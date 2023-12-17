import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
const ProductDetail = () => {
    /* to ab hum useParams ki madat se jo bhi id hai use le lenge
    or ha id usi naam se lenge jis naam se router setup kiye hai 
    */
    const { id } = useParams();

    const [product, setProduct] = useState({});
  

    useEffect(()=>{
        const filterProducts = items.filter((product) => product.id == id);
        setProduct(filterProducts[0])
    },[id])
    

  return (
    <div>
      <div className="container con">
        <div className="img">
          <img src = {product.imgSrc} alt="..." /> 
          </div>
          <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
                  <p className="card-text">{product.description}</p>
                  <button className='btn btn-primary mx-3'>₹{product.price}</button>
                  <button className='btn btn-warning'>Add to Cart</button>
          </div>
          </div>
    </div>
  )
}

export default ProductDetail
