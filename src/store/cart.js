import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalPrice: 0.00,
        totalQty: 0
    },
    reducers: {
        addItem(state, action) {

        },
        removeItem(state, action) {

        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;