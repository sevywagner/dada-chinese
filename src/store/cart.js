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
            const existingCartItemIndex = state.cart.findIndex((cartItem) => cartItem.id === action.payload);
            
            if (existingCartItemIndex) {
                state.cart[existingCartItemIndex].quantity += 1;
                state.totalPrice += action.payload.price;
                state.totalQty += 1;
                return;
            }

            state.cart.push(action.payload);
            state.totalPrice += action.payload.price;
            state.totalQty += 1;
        },
        removeItem(state, action) {
            const existingCartItemIndex = state.cart.findIndex((cartItem) => cartItem.id === action.payload);
            
            if (state.cart[existingCartItemIndex].length > 1) {
                state.cart[existingCartItemIndex].quantity -= 1;
                state.totalPrice -= state.cart[existingCartItemIndex].price;
                state.totalQty -= 1;
                return;
            }

            state.cart.filter((cartItem) => cartItem !== action.payload);
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;