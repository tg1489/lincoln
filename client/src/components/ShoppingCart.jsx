import React from 'react';
import { Col, Row, Container, Button } from 'react-bootstrap';
import { useShoppingCart } from 'use-shopping-cart';
import trash from '../assets/trash.png';

export default function ShoppingCart({
  isMobile,
  currentPage,
  handlePageChange,
}) {
  // Shopping Cart
  const {
    addItem,
    cartCount,
    cartDetails,
    totalPrice,
    incrementItem,
    decrementItem,
    removeItem,
    clearCart,
  } = useShoppingCart();

  // Retreive shopping cart from localStorage
  const cartData = JSON.parse(localStorage.getItem('shoppingCart')) || {};

  // Clear Cart Items
  const handleClearCart = () => {
    clearCart();
    localStorage.removeItem('shoppingCart');
  };

  return (
    <div>
      <Row>
        <Col>
          {Object.keys(cartData).map((cartId) => {
            const { name, price, image, quantity } = cartData[cartId];

            // Below shows saved shopping cart contents
            return (
              <Container key={cartId} className='shopping-cart'>
                <Row className='shopping-cart-row mb-5 mt-5'>
                  <Col>
                    {' '}
                    <img
                      className='shopping-cart-pic'
                      src={image}
                      alt='cart image'
                    />
                  </Col>
                  <Col>
                    <strong>{name}</strong>
                  </Col>
                  {/* Price */}
                  <Col>
                    <span className='price'>
                      {cartDetails[cartId] &&
                        cartDetails[cartId].formattedValue}
                    </span>
                  </Col>
                  {/* Quantity */}
                  <Col>
                    <span className='quantity'>{quantity}</span>
                  </Col>

                  <Col>
                    <img
                      className='trash'
                      src={trash}
                      onClick={() => {
                        const updatedQuantity = quantity - 1;

                        // Update the shopping cart
                        if (updatedQuantity > 0) {
                          decrementItem(cartId);
                        } else {
                          // If the quantity becomes zero, remove the item from the cart
                          removeItem(cartId);
                        }

                        // Update localStorage
                        const updatedCartData = { ...cartData };
                        if (updatedQuantity > 0) {
                          // If quantity is greater than 0, update the quantity
                          updatedCartData[cartId] = {
                            ...cartData[cartId],
                            quantity: updatedQuantity,
                          };
                        } else {
                          // If quantity is 0, remove the item from localStorage
                          delete updatedCartData[cartId];
                        }

                        localStorage.setItem(
                          'shoppingCart',
                          JSON.stringify(updatedCartData)
                        );

                        // Log the updated quantities
                        console.log(`before: ${quantity}`);
                        console.log(`after: ${updatedQuantity}`);
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          {cartCount === 0 ? (
            ''
          ) : (
            <Button
              variant='primary'
              onClick={() => handlePageChange('checkout')}
            >
              Checkout
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}
