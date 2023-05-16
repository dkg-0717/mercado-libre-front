import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getProductsByName } from '../services/products'
import { setProducts } from '../store/slices/products/productSlice';
import ItemCard from './ItemCard'
import '../assets/css/results.css'

const Results = () => {

  const dispatch = useDispatch()
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
  const param = searchParams.get('search')
  const { products } = useSelector((state) => state.products)

  console.log(products)

  const getProducts = async () => {
    const { items } = await getProductsByName(param)
    dispatch(setProducts(items))
  }

  useEffect(() => {
    if (products.length == 0) {
      getProducts()
    }
  })

  return (
    <div className='results-container'>
      <div className='breadcrumb'></div>
      {products.length > 0 &&
        <div className='results'>
          {products.map((product, idx) => {
            {
              return (
                <ItemCard key={idx} product={product} />
              )
            }
          })}
        </div>
      }
    </div>
  )
}

export default Results