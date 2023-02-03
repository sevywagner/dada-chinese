import { Fragment } from 'react';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import router from './components/Routing';

function App() {
  return <RouterProvider router={router} />;
}

export default App;