import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0.00,
        totalQuantity: 0,
        credit: 0,
        creditPrice: 0
    },
    reducers: {
        addItem(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.id);
            
            if (existingCartItemIndex > -1) {
                state.items[existingCartItemIndex].quantity += 1;
                state.totalPrice += action.payload.price;
                state.totalQuantity++;
            } else {
                state.items.push(action.payload);
                state.totalPrice += action.payload.price;
                state.totalQuantity++;
            }

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
        },
        addItemAsGuest(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.id);
            
            if (existingCartItemIndex > -1) {
                state.items[existingCartItemIndex].quantity += 1;
                state.totalPrice += action.payload.price;
                state.totalQuantity++;
            } else {
                state.items.push(action.payload);
                state.totalPrice += action.payload.price;
                state.totalQuantity++;
            }
        },
        removeItem(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.cartItemId);

            if (state.items[existingCartItemIndex].quantity > 1) {
                state.items[existingCartItemIndex].quantity -= 1;
                state.totalPrice -= state.items[existingCartItemIndex].price;
                state.totalQuantity--;
            } else {
                state.totalPrice -= state.items[existingCartItemIndex].price;
                state.items = state.items.filter((item) => item.id !== action.payload.cartItemId);
                state.totalQuantity--;
            }

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
        removeItemAsGuest(state, action) {
            const existingCartItemIndex = state.items.findIndex((cartItem) => cartItem.id === action.payload.cartItemId);

            if (state.items[existingCartItemIndex].quantity > 1) {
                state.items[existingCartItemIndex].quantity -= 1;
                state.totalPrice -= state.items[existingCartItemIndex].price;
                state.totalQuantity--;
            } else {
                state.totalPrice -= state.items[existingCartItemIndex].price;
                state.items = state.items.filter((item) => item.id !== action.payload.cartItemId);
                state.totalQuantity--;
            }
        },
        setCart(state, action) {
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice;
            state.totalQuantity = action.payload.totalQuantity;
            state.credit = action.payload.credit;
            state.creditPrice = action.payload.creditPrice;
        },
        resetCart(state, action) {
            state.items = [];
            state.totalPrice = 0.00;
            state.totalQuantity = 0;

            if (action.guest === false) {
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
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;