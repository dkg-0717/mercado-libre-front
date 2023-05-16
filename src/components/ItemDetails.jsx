import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import currency from '../utils/currency';
import { getProductById } from '../services/products';
import '../assets/css/itemDetails.css'

const ItemDetails = () => {

  let { id } = useParams();
  const [product, setProduct] = useState(null)


  useEffect(() => {
    async function fetchData() {
      const product = await getProductById(id);
      setProduct(product)
    }
    fetchData();
  }, [])

  if (!product) return null

  const productCondition = (condition) => {
    if (condition == 'new') return 'Nuevo'
  }

  return (
    product && <div className='details-container'>
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
    </div>
  )
}

export default ItemDetails