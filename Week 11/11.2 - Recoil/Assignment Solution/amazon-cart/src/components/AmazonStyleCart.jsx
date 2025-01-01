import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Minus, Plus } from "lucide-react";
import { cartItemsState } from "../store/cartItemsState";
import { cartTotalSelector } from "../store/cartTotalSelector";
import { styles } from "./AmazonStyleCart.module.js";
import { Header, PurchaseModal } from "./";

const AmazonStyleCart = () => {
    const [cartItems, setCartItems] = useRecoilState(cartItemsState);
    const { total, itemCount } = useRecoilValue(cartTotalSelector);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const updateQuantity = (id, change) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const handleCheckout = () => {
        setIsModalOpen(true);
    };

    const handlePurchaseComplete = () => {
        setIsModalOpen(false);
        setCartItems([]);
    };

    return (
        <div>
            <Header itemCount={itemCount} />
            <main style={styles.main}>
                <div style={styles.cartAndSummary}>
                    <h2 style={styles.heading}>Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <div>
                            {cartItems.map((item) => (
                                <div key={item.id} style={styles.item}>
                                    <img src={item.image} alt={item.name} style={styles.itemImage} />
                                    <div style={{ flexGrow: 1 }}>
                                        <h3>{item.name.substring(0, 18)}</h3>
                                        <p style={{ color: "#48bb78" }}>In stock</p>
                                        <div style={styles.quantityControls}>
                                            <button style={styles.button} onClick={() => updateQuantity(item.id, -1)}>
                                                <Minus size={16} />
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button style={styles.button} onClick={() => updateQuantity(item.id, 1)}>
                                                <Plus size={16} />
                                            </button>
                                            <button style={styles.button} onClick={() => removeItem(item.id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <p>₹{item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div style={styles.cartAndSummary}>
                    <h3 style={styles.heading}>Order Summary</h3>
                    <div style={styles.totalAndSummary}>
                        <span>Items ({itemCount}):</span>
                        <span>₹{total}</span>
                    </div>
                    <div style={styles.totalAndSummary}>
                        <span>Order Total:</span>
                        <span>₹{total}</span>
                    </div>
                    <button style={styles.proceedButton} onClick={handleCheckout} disabled={cartItems.length === 0}>
                        Proceed to Buy
                    </button>
                </div>
            </main>

            {isModalOpen && <PurchaseModal handlePurchaseComplete={handlePurchaseComplete} total={total} />}
        </div>
    );
};

export default AmazonStyleCart;
