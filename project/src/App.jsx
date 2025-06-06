import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Sale from './pages/Sale';
import CustomerCare from './pages/CustomerCare';
import Stores from './pages/Stores';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="background-section">
                <h1>Welcome to Pretty Gal</h1>
              </div>
              <Main />
            </>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/customer-care" element={<CustomerCare />} />
        <Route path="/stores" element={<Stores />} />
        {/* <Route path="/shop" element={<Shop />} /> */}

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;



