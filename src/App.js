import { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from './store/redux/cart';
import { RouterProvider } from 'react-router-dom';
import { authContext, getRemainingTime } from './store/context/auth-context';

import './App.css';
import router from './components/Routing';

function App() {
  const authCtx = useContext(authContext);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dada-chinese-rest-api.herokuapp.com/shop/get-cart', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authCtx.token
      }
    }).then((result) => {
      if (result.ok) {
          return result.json();
      }
    }).then((sessionCart) => {
      dispatch(cartActions.setCart({ items: sessionCart.items, totalPrice: sessionCart.totalPrice }));
    }).catch((err) => console.log(err));
  }, [authCtx.isLoggedIn])

  return <RouterProvider router={router} />;
}

export default App;