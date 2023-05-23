import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  isLoading: false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    }
  },
})

export const { setProducts, setIsLoading } = productSlice.actions
