import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import { useShoppingCart } from 'use-shopping-cart';
import '../../styles/Profile.css';

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();

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

  return (
    <Container className='profile-view'>
      <Row className='profile-row'>
        <Col>
          {isAuthenticated && (
            <article>
              {user?.picture && <img src={user.picture} alt={'Default pic'} />}
              <h5>{user?.nickname}</h5>
              <h5>{user?.email}</h5>
              <LogoutButton />
            </article>
          )}
        </Col>

        <Col>
          <section>
            <h5>Shopping Cart</h5>
            <h6>Items Inside: {cartCount}</h6>

            {/* Add your shopping cart content here */}
          </section>
        </Col>
      </Row>
    </Container>
  );
}
