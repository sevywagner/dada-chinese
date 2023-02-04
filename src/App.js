import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from './store/cart';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import router from './components/Routing';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dada-chinese-rest-api.herokuapp.com/shop/get-cart', {
      method: 'GET',
    }).then((result) => {
      if (result.ok) {
          return result.json();
      }
    }).then((sessionCart) => {
      dispatch(cartActions.setCart({ items: sessionCart.items, totalPrice: sessionCart.totalPrice }));
    }).catch((err) => console.log(err));
  }, [])

  return <RouterProvider router={router} />;
}

export default App;