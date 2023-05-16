import React from 'react'
import Header from './components/Header'
import Results from './components/Results'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'
import AppRouter from './router/AppRouter'

function App() {

  return (
    <div className='container'>
      <Provider store={store}>
        <Header />
        <AppRouter />
      </Provider>
    </div>
  )
}

export default App
