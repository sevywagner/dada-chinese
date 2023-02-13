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
            } else {
                state.items.push(action.payload);
                state.totalPrice += action.payload.price;
            }

            fetch('https://dada-chinese-rest-api.herokuapp.com/shop/update-cart', {
                method: 'POST',
                body: JSON.stringify({
                    cart: {
                        items: state.items,
                        totalPrice: state.totalPrice
                    },
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then((result) => {
                if (result.ok) {
                    return result.json();
                }
            }).then((data) => {
                console.log(data);
            }).catch(err => console.log(err));
        },
        removeItem(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.cartItemId);

            if (state.items[existingCartItemIndex].quantity > 1) {
                state.items[existingCartItemIndex].quantity -= 1;
                state.totalPrice -= state.items[existingCartItemIndex].price;
            } else {
                state.totalPrice -= state.items[existingCartItemIndex].price;
                state.items = state.items.filter((item) => item.id !== action.payload.cartItemId);
            }

            fetch('https://dada-chinese-rest-api.herokuapp.com/shop/update-cart', {
                method: 'POST',
                body: JSON.stringify({
                    cart: {
                        items: state.items,
                        totalPrice: state.totalPrice
                    },
                }),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: 'Bearer ' + action.payload.token
                }
            }).then((result) => {
                if (result.ok) {
                    return result.json();
                }
            }).then((data) => {
                console.log(data);
            }).catch(err => console.log(err));
        },
        setCart(state, action) {
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;