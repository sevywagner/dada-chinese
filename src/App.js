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
      fetch('https://dada-chinese-rest-api.herokuapp.com/shop/get-cart', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }).then((result) => {
        if (result.ok) {
            return result.json();
        }
      }).then((sessionCart) => {
        dispatch(cartActions.setCart({ items: sessionCart.items, totalPrice: sessionCart.totalPrice, totalQuantity: sessionCart.totalQuantity }));
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