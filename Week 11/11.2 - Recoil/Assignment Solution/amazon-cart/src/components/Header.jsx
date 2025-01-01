import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import styles from './Header.module.js';

const Header = ({ itemCount }) => {
  return (
    <header style={styles.header}>
      <div style={styles.headerContainer}>
        <Link to="/" style={styles.logoLink}>
          <h1>amazon.in</h1>
        </Link>
        <div style={styles.headerRight}>
          <span>Hello, User</span>
          <div style={styles.cartIcon}>
            <Link to="/cart" style={styles.cartLink}>
              <ShoppingCart size={24} />
            </Link>
            <span style={styles.cartCount}>{itemCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
