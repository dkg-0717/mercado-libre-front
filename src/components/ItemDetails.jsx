import React, { useEffect, useState } from 'react'
import NotFound from './NotFound';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/products';
import currency from '../utils/currency';
import '../assets/css/itemDetails.css'

const ItemDetails = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const product = await getProductById(id);
      if (product.status !== 404) setProduct(product)
    }
    fetchData();
  }, [])

  const productCondition = (condition) => {
    if (condition == 'new') return 'Nuevo'
  }

  return (
    product ? <div className='details-container'>
      <div className='breadcrumb'></div>
      <div className="details">
        <div className="image-container">
          <img className='image-product' src={product.picture} alt="" />
          <h2 className='product-title'>Descripción del producto</h2>
          <p className='product-description'>{product.description}</p>
        </div>
        <div className="product-info">
          <p className='product-condition'>{productCondition(product.condition)} - 234 vendidos</p>
          <p className='product-name'>{product.title}</p>
          <p className='product-price'>{currency(product.price.amount)}</p>
          <button className='buy-button'>Comprar</button>
        </div>
      </div>
    </div> : <NotFound />
  )
}

export default ItemDetails