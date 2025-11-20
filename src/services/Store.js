import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./CartSlice"
import userSlice from "./UserSlice"
import OrderSlice from './OrderSlice'

const Store = configureStore({
    reducer: {
        cart: cartslice,
        user: userSlice,
        order: OrderSlice
    }
})

export default Store