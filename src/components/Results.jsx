import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getProductsByName } from '../services/products'
import { setProducts, setCategory } from '../store/slices/products/productSlice';
import ItemCard from './ItemCard'
import Loading from './Loading'
import '../assets/css/results.css'

const Results = () => {

  const dispatch = useDispatch()
  const search = useLocation().search
  const searchParams = new URLSearchParams(search)
  const param = searchParams.get('search')
  const { products, isLoading, category } = useSelector((state) => state.products)


  const getProducts = async () => {
    const { items, category } = await getProductsByName(param)
    dispatch(setProducts(items))
    dispatch(setCategory(category))
  }

  useEffect(() => {
    if (products.length == 0 && param) {
      getProducts()
    }
  })

  return (
    <div className='results-container'>
      <div className='breadcrumb'>
        <p className='categories-txt'>{category}</p>
      </div>
      {(products.length > 0 && !isLoading) ?
        <div className='results'>
          {products.map((product, idx) => {
            {
              return (
                <ItemCard key={idx} product={product} />
              )
            }
          })}
        </div> : (isLoading) && <Loading />
      }
    </div>
  )
}

export default Results