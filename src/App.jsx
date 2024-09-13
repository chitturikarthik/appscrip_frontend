import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className='after_nav'>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus veniam porro animi esse repudiandae nostrum ad labore consectetur numquam molestiae.</p>
      </div>
      <div className="main-content">
        <Sidebar />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;