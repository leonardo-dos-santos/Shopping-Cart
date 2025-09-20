import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders navbar with links', () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </CartProvider>
    );
    
    // Check if navbar links are rendered
    expect(screen.getByText(/ShopCart/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  });

  test('does not show cart count when cart is empty', () => {
    render(
      <CartProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </CartProvider>
    );
    
    // Cart count should not be visible when cart is empty
    const cartCountElement = screen.queryByTestId('cart-count');
    expect(cartCountElement).not.toBeInTheDocument();
  });
});