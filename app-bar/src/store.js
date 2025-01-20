import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/slice/add-cart/addCartslice'
export const  store = configureStore({
    reducer: {
        counter: counterReducer,

    },
})