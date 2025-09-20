import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to ShopCart</h1>
        <p>Discover amazing products at great prices</p>
        <Link to="/shop" className="shop-now-btn">Shop Now</Link>
      </div>
      
      <div className="features-section">
        <div className="feature">
          <i className="feature-icon">🚚</i>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature">
          <i className="feature-icon">⭐</i>
          <h3>Top Quality</h3>
          <p>Handpicked products</p>
        </div>
        <div className="feature">
          <i className="feature-icon">🔄</i>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
      </div>
    </div>
  );
}

export default Home;