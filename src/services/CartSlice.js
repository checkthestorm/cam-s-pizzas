import { createSlice } from "@reduxjs/toolkit"

const initialItemsCart = {
    cartItems: [], 
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialItemsCart,
    reducers: {
        addItems(state, action) {
            state.cartItems = [...state.cartItems, action.payload]
            // OR 
            // state.items.push(action.payload)
        },
        removeItem(state, action) {
            state.cartItems = state.cartItems.filter((obj) => obj.id !== action.payload)
        },
        increaseItemQuantity (state, action) {
            const item = state.cartItems.find((item) => item.id === action.payload)
            item.quantity++

            item.totalPrice = item.price * item.quantity
        },
        decreaseItemQuantity (state, action) {
            const item = state.cartItems.find((item) => item.id === action.payload)
            item.quantity--

            item.totalPrice = item.price * item.quantity
        },
        clearCart (state) {
            state.cartItems = []
        }
    }
})

export const {addItems, removeItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions
export default cartSlice.reducer
