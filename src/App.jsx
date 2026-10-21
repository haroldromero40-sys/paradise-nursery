
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

import './App.css';

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>🌿 Paradise Nursery</h1>

        <p>Bring Nature Into Your Home</p>
      </header>

      <main className="home-content">
        <h2>Welcome to Paradise Nursery</h2>

        <p>
          Discover our beautiful collection of indoor plants
          and bring freshness, beauty, and nature into your home.
        </p>

        <a href="/plants" className="start-button">
          Comenzar
        </a>

        <p>
          <a href="/about" className="home-about-link">
            Conoce nuestra empresa
          </a>
        </p>
      </main>

      <footer className="home-footer">
        <p>Paradise Nursery © 2026</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
