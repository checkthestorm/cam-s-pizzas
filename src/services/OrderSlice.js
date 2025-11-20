import { createSlice } from "@reduxjs/toolkit"

const initialItems = {
    orderId: "",
    isPriority: false
}

const orderSlice = createSlice({
    name: "order",
    initialState: initialItems,
    reducers: {
        createOrderId(state, action) {
            state.orderId = action.payload
        },
        setPriority(state) {
            state.isPriority = !state.isPriority
        }
    }
})

export const {createOrderId} = orderSlice.actions;
export default orderSlice.reducer