import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  category: '',
  isLoading: false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    setCategory: (state, { payload }) => {
      state.category = payload
    }
  }
})

export const { setProducts, setIsLoading, setCategory } = productSlice.actions
