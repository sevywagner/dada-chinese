import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from './store/redux/cart';
import { RouterProvider } from 'react-router-dom';
import { authContext } from './store/context/auth-context';

import './App.css';
import router from './components/Routing';

function App() {
  const authCtx = useContext(authContext);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetch('http://localhost:8080/shop/get-cart', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((result) => {
        if (result.ok) {
            return result.json();
        }
      }).then((sessionCart) => {
        let creditPrice = parseInt(sessionCart.cart.totalPrice) - parseInt(sessionCart.credit);
        if (sessionCart.cart.totalPrice < sessionCart.credit) {
          creditPrice = 0;
        }
        dispatch(cartActions.setCart({ 
          items: sessionCart.cart.items, 
          totalPrice: sessionCart.cart.totalPrice, 
          totalQuantity: sessionCart.cart.totalQuantity,
          credit: parseInt(sessionCart.credit),
          creditPrice
        }));

      }).catch((err) => console.log(err));
    }
  }, [authCtx.isLoggedIn])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const tokenIsValid = authCtx.getTokenValidity();
      if (!tokenIsValid) {
        authCtx.logoutHandler();
      }
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;