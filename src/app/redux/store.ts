import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './cart/slice'
import { coffeeCatalogSlice } from './coffeeCatalog/slice'
import { useDispatch, useSelector } from 'react-redux'


export const store = configureStore({
    reducer: {
        [coffeeCatalogSlice.name]: coffeeCatalogSlice.reducer,
        [cartSlice.name]: cartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 
export const useAppSelector = useSelector.withTypes<RootState>()