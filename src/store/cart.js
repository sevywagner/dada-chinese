import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0.00
    },
    reducers: {
        addItem(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.id);
            
            if (existingCartItemIndex > -1) {
                state.items[existingCartItemIndex].quantity += 1;
                state.totalPrice += action.payload.price;
                return;
            }

            state.items.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeItem(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload);

            if (state.items[existingCartItemIndex].quantity > 1) {
                state.items[existingCartItemIndex].quantity -= 1;
                state.totalPrice -= state.items[existingCartItemIndex].price;
                return;
            }

            state.totalPrice -= state.items[existingCartItemIndex].price;
            state.items = state.items.filter((item) => item.id !== action.payload);
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;