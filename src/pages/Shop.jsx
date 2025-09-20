import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { getProducts } from '../services/productService';
import PropTypes from 'prop-types';
import '../styles/Shop.css';

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <div className="quantity-control">
          <button onClick={handleDecrement} className="quantity-btn">-</button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={handleIncrement} className="quantity-btn">+</button>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(12); // Limit to 12 products
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product, quantity) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity
    });
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="shop-page">
      <h1>Shop</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;