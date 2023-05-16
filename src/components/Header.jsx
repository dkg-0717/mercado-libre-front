import React from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByName } from '../services/products'
import { setProducts } from '../store/slices/products/productSlice'
import Logo from '../assets/images/Logo_ML.png'
import '../assets/css/header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const searchProduct = async (e) => {
    const value = e.target.value
    if (e.key === 'Enter' && value !== '') {
      const { items } = await getProductsByName(value)
      dispatch(setProducts(items))
      navigate({
        pathname: '/items',
        search: `?search=${value}`
      });
    }
  }

  return (
    <header className='header'>
      <div className='header-container'>
        <div className='logo'>
          <img src={Logo} />
        </div>
        <div className="searcher">
          <input className='ml-input' type="text" placeholder='Nunca dejes de buscar'
            onKeyDown={searchProduct} />
          <button className='searcher-button'>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header