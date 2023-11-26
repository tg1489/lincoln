import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { useShoppingCart } from 'use-shopping-cart';
import trash from '../../assets/trash.png';
import '../../styles/Profile.css';

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    console.log(`handleShowModal activated`);
    console.log(`showModal: ${showModal}`);

    setShowModal(true);
  };
  const handleHideModal = () => {
    console.log(`handleHideModal activated`);
    setShowModal(false);
  };

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
    <Container className='profile-view'>
      <Row className='profile-row'>
        <Col>
          {isAuthenticated && (
            <article>
              {/* Username */}
              <div className='mb-4'>
                {user?.picture && (
                  <img src={user.picture} alt={'Default pic'} />
                )}
              </div>
              {/* Sign Out Button */}
              <LogoutButton />
            </article>
          )}
        </Col>
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
      </Row>
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
          <Button variant='primary' onClick={handleShowModal}>
            Checkout
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Body of the modal</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleHideModal}>
            Close
          </Button>
          <Button variant='primary' onClick={handleHideModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
