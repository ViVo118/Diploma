import { createAsyncThunk } from "@reduxjs/toolkit"
import { coffeeApi } from "../../api/coffeeCatalog"

export const fetchCoffeeProducts = createAsyncThunk(
    "coffeeCatalog/fetchCoffeeProducts",
    async () => {
      const response = await coffeeApi.fetchCoffeeProducts()
      return response
    }
  )