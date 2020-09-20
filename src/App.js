import React from 'react';
import './App.css';
import Layout from "./hoc/Layout/Layout";
import HomePage from "./containers/HomePage/HomePage";

const App = () => {
    return (
      <Layout>
        <HomePage/>
      </Layout>
    );
}

export default App;
