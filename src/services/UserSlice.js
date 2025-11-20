import { createSlice } from "@reduxjs/toolkit"

const initialItemsUser = {
    username: "",
    signUp: false,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialItemsUser,
    reducers: {
        createUser(state, action) {
            state.username = action.payload
        },
        setSignUp(state) {
            state.signUp = !state.signUp
        },
    }
})

export const {createUser, setSignUp} = userSlice.actions
export default userSlice.reducer