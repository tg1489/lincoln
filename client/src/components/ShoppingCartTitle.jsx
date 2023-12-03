import React from 'react';
import { Col } from 'react-bootstrap';
import { useShoppingCart } from 'use-shopping-cart';

export default function ShoppingCartTitle() {
  // Shopping Cart
  const { cartCount, clearCart } = useShoppingCart();

  // Clear Cart Items
  const handleClearCart = () => {
    clearCart();
    localStorage.removeItem('shoppingCart');
  };
  return (
    <Col>
      {/* Shopping Cart Title */}
      <h5>Shopping Cart</h5>
      {/* Shopping Cart Subtitle */}
      <h6>You have {cartCount} items in your cart</h6>
      {cartCount === 0 ? (
        ''
      ) : (
        <button onClick={handleClearCart}>Clear Cart</button>
      )}
    </Col>
  );
}
