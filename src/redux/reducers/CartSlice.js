import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        cart: [],
    },
    reducers: {
        addItem: (state, action) => {
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id)

            if (itemIndex !== -1) {
                state.cart[itemIndex].quantity += 1;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                })
            }

        },
        removeItem: (state, action) => {
            const removed = state.cart.filter(item => item.id != action.payload.id);
            state.cart = removed
        },
        addQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload.id);
            item.quantity = item.quantity + 1
        },
        lessQuantity: (state, action) => {
            // product a index find kia
            const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
            // check if product exist
            if (itemIndex !== -1) {
                let item = state.cart[itemIndex]
                // agar quantity 1 h to remove warna minus
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.cart.splice(itemIndex, 1)
                }
            }
        }
    }
})

export const { addItem, removeItem, lessQuantity, addQuantity } = cartSlice.actions;
export default cartSlice.reducer;
