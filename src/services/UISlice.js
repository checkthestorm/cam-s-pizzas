import { createSlice } from "@reduxjs/toolkit"

const initialItems = {
    menuToggle: false
}

const UISlice = createSlice({
    name: "UISlice",
    initialState: initialItems,
    reducers: {
        toggleMenu(state) {
            state.menuToggle = !state.menuToggle
        }
    }
})

export const {toggleMenu} = UISlice.actions
export default UISlice.reducer