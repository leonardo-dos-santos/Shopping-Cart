import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ShopCart</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart
            {cartCount > 0 && <span className="cart-count" data-testid="cart-count">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;