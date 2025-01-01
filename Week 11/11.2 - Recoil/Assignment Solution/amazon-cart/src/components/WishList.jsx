import { useState } from 'react';
import { cartItemsState } from '../store/cartItemsState';
import { cartTotalSelector } from '../store/cartTotalSelector';
import { useRecoilState, useRecoilValue } from 'recoil';
import { styles } from "./WishListStyles.module.js";
import { wishItemsState } from '../store/wishItemsState.js';
import { ProductModal, Header, Sidebar } from "./"


const WishList = () => {
  const { total, itemCount } = useRecoilValue(cartTotalSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [wishItems, setWishItems] = useRecoilState(wishItemsState);
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const [isAdded, setIsAdded] = useState(false);


  const [addedProducts, setAddedProducts] = useState({});

  const addToCart = (id) => {
    if (addedProducts[id]) return;

    setAddedProducts(prev => ({ ...prev, [id]: true }));
    const wishItem = wishItems.find(item => item.id === id);

    const existingCartItem = cartItems.find(item => item.id === id);

    if (existingCartItem) {

      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {

      setCartItems(prevItems => [
        ...prevItems,
        { ...wishItem, quantity: 1 }
      ]);
    }
  };


  <button
    style={styles.addToCartButton}
    onClick={() => addToCart(product.id)}
    disabled={isAdded}
  >
    {isAdded ? 'Proceed to Checkout' : 'Add to Cart'}
  </button>

  return (
    <div style={styles.container}>
      <Header itemCount={itemCount} />
      <div style={styles.main}>
        <Sidebar />
        <main style={styles.content}>
          <div style={styles.productGrid}>
            {wishItems.map((product) => (
              <div key={product.id} style={styles.productCard}>
                <img src={product.image} alt={product.name} style={styles.productImage} />
                <h3 style={styles.productName}>{(product.name).substring(0, 21)}</h3>
                <p style={styles.productPrice}>₹{product.price.toFixed(2)}</p>
                <button style={styles.addToCartButton} onClick={() => addToCart(product.id, 1)} disabled={!!addedProducts[product.id]}>
                  {addedProducts[product.id] ? (
                    <span>
                      <a href="/cart" style={{ textDecoration: "none", color: "inherit" }}>Proceed to Checkout </a>
                    </span>
                  ) : (
                    'Add to Cart'
                  )}

                </button>
                <button
                  style={styles.quickViewButton}
                  onClick={() => handleOpenModal(product)}
                  aria-label={`Quick view ${product.name}`}
                >
                  Quick View
                </button>
                <ProductModal
                  product={selectedProduct}
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default WishList