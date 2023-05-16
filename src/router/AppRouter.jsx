import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../components/Header'
import Results from '../components/Results'
import ItemDetails from '../components/ItemDetails'
import '../App.css'

const AppRouter = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/items' element={<Results />}></Route>
        <Route path='/items/:id' element={<ItemDetails />}></Route>
      </Routes>
    </div>
  )
}

export default AppRouter