import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0.00,
        totalQuantity: 0,
    },
    reducers: {
        addItem(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => (cartItem.id === action.payload.id) && (cartItem.time === action.payload.time));
            
            if (existingCartItemIndex > -1) {
                state.items[existingCartItemIndex].quantity += 1;
                state.totalPrice += action.payload.price;
                state.totalQuantity++;
            } else {
                state.items.push(action.payload);
                state.totalPrice += action.payload.price;
                state.totalQuantity++;
            }

            if (localStorage.getItem('token')) {
                fetch('https://dada-chinese-rest-api.herokuapp.com/shop/update-cart', {
                    method: 'POST',
                    body: JSON.stringify({
                        cart: {
                            items: state.items,
                            totalPrice: state.totalPrice,
                            totalQuantity: state.totalQuantity
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
            }
        },
        removeItem(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.id && cartItem.time === action.payload.time);

            if (state.items[existingCartItemIndex].quantity > 1) {
                state.items[existingCartItemIndex].quantity -= 1;
                state.totalPrice -= state.items[existingCartItemIndex].price;
                state.totalQuantity--;
            } else {
                state.totalPrice -= state.items[existingCartItemIndex].price;
                state.items = state.items.filter((item) => item.time !== action.payload.time);
                state.totalQuantity--;
            }

            if (localStorage.getItem('token')) {
                fetch('https://dada-chinese-rest-api.herokuapp.com/shop/update-cart', {
                    method: 'POST',
                    body: JSON.stringify({
                        cart: {
                            items: state.items,
                            totalPrice: state.totalPrice,
                            totalQuantity: state.totalQuantity
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
            }
        },
        setCart(state, action) {
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice;
            state.totalQuantity = action.payload.totalQuantity;
        },
        resetCart(state, action) {
            state.items = [];
            state.totalPrice = 0.00;
            state.totalQuantity = 0;

            if (localStorage.getItem('token')) {
                fetch('https://dada-chinese-rest-api.herokuapp.com/shop/update-cart', {
                    method: 'POST',
                    body: JSON.stringify({
                        cart: {
                            items: [],
                            totalPrice: 0,
                            totalQuantity: 0.00
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
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;