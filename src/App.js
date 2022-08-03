import React from 'react';
import Header from './Container/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './Container/ProductListing';
import ProductDetails from './Container/ProductDetails';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route to='/' element={ProductListing} />
          <Route to='/product/:productId' element={ProductDetails} />
          <Route> 404 Page Not Found!</Route>
        </Routes>
      </Router>
      {/* <h1>Hello From App Component</h1> */}
    </div>
  );
};

export default App;
