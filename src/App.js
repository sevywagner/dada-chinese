import { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import router from './components/Routing';

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;