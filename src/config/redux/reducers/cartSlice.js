import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cart: []
    },
    reducers: {
        AddItem: (state, action) => {
            state.push(action.payload)
        },
    }

})


export const { AddItem } = cartSlice.actions
export default cartSlice.reducer;
