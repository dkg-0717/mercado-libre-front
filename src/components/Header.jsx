import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductsByName } from '../services/products'
import { setProducts } from '../store/slices/products/productSlice'
import Logo from '../assets/images/Logo_ML.png'
import '../assets/css/header.css'
import { useNavigate } from "react-router-dom";

const Header = () => {

  const [inputValue, setValue] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const searchProduct = async (e) => {
    if (inputValue !== '' && e.key === 'Enter' || e == 'button') {
      const { items } = await getProductsByName(inputValue)
      dispatch(setProducts(items))
      navigate({
        pathname: '/items',
        search: `?search=${inputValue}`
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
            onKeyDown={searchProduct} value={inputValue} onChange={e => setValue(e.target.value)} />
          <button className='searcher-button' onClick={() => searchProduct('button')}>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header