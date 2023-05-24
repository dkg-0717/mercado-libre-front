import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByName } from '../services/products'
import { setProducts, setIsLoading, setCategories } from '../store/slices/products/productSlice'
import Logo from '../assets/images/Logo_ML.png'
import '../assets/css/header.css'
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const [inputValue, setValue] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const searchProduct = async (e) => {
    if (inputValue !== '' && e.key === 'Enter' || e == 'button') {
      dispatch(setIsLoading(true))
      navigate({
        pathname: '/items',
        search: `?search=${inputValue}`
      });
      const { items, categories } = await getProductsByName(inputValue)
      if (items) {
        dispatch(setProducts(items))
        dispatch(setCategories(categories))
      }
      dispatch(setIsLoading(false))
    }
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <Link to="/">
            <img src={Logo} alt='Logo meli' />
          </Link>
        </div>
        <div className="searcher">
          <input className='ml-input' type="text" placeholder='Nunca dejes de buscar'
            onKeyDown={searchProduct} value={inputValue} onChange={e => setValue(e.target.value)} />
          <button className='searcher-button' onClick={() => searchProduct('button')}>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header