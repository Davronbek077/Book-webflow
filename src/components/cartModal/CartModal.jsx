import React from "react";
import { FiX } from "react-icons/fi";
import "./CartModal.css";

const CartModal = ({ isOpen, onClose, cartItems, onRemove, onQtyChange }) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.qty;
  }, 0);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Your Cart</h3>
          <button className="close-btn" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => {
                const price = parseFloat(item.price.replace("$", ""));
                const itemTotal = price * item.qty;

                return (
                  <li key={item.id} className="cart-item">
                    <img
                      style={{ width: 90, height: 110 }}
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="item-info-btn">
                      <div className="item-info">
                        <div className="item-input">
                        <h4>{item.name}</h4>
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) =>
                            onQtyChange(item.id, Number(e.target.value))
                          }
                          className="qty-input"
                        />
                        </div>
                        <p>
                          ${price.toFixed(2)}
                          {item.qty > 1 && (
                            <> × {item.qty} = $ {itemTotal.toFixed(2)} </>
                          )}
                        </p>
                        <button
                        className="remove-button"
                        onClick={() => onRemove(item.id)}
                      >
                        Remove
                      </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="cart-total">
              <h4>Sub-Total</h4>
              <span>$ {totalPrice.toFixed(2)} USD</span>
            </div>

            <button className="checkout-btn">Continue to Checkout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
