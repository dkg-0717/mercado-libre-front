import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  categories: [],
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
    setCategories: (state, { payload }) => {
      state.categories = payload
    }
  }
})

export const { setProducts, setIsLoading, setCategories } = productSlice.actions
