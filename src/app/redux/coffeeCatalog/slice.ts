import { createSlice } from "@reduxjs/toolkit"
import { fetchCoffeeProducts } from "../thunks/thunks"
import { CoffeProduct } from "@/app/interfaces/interfaces"
interface InitialState {
    loading: boolean,
    coffeeProducts: CoffeProduct[],
    error: any
  }
  
  const initialState: InitialState = {
    loading: false,
    coffeeProducts: [],
    error: null
  }

  export const coffeeCatalogSlice = createSlice({
    name: 'coffeeProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
      builder.addCase(fetchCoffeeProducts.fulfilled, (state, action) =>{
        state.error = null
        state.loading = false
        state.coffeeProducts = action.payload
      })
      builder.addCase(fetchCoffeeProducts.rejected, (state, action) =>{
        state.error = action.error
        state.loading = false
      })
      builder.addCase(fetchCoffeeProducts.pending,(state) =>{
        state.loading = true
      })
    }
  })