import './App.css';
import Routing from './components/Routing';
import Layout from './components/layout/Layout';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Layout>
        <Routing />
      </Layout>
    </Fragment>
  );
}

export default App;