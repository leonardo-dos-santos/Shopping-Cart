import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
