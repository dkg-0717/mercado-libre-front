import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  isLoading: false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload
    },
    setIsLoading(state, { payload }) {
      state.isLoading = payload
    }
  },
})

export const { setProducts, setIsLoading } = productSlice.actions
