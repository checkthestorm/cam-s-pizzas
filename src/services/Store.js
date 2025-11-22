import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./CartSlice"
import userSlice from "./UserSlice"
import OrderSlice from './OrderSlice'
import UISlice from './UISlice'
const Store = configureStore({
    reducer: {
        cart: cartslice,
        user: userSlice,
        order: OrderSlice,
        UI: UISlice
    }
})

export default Store