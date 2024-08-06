import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import ProductListing from './Components/ProductListing';
import ShoppingCart from './Components/ShoppingCart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
