import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import checkoutImage from '../assets/checkout.png';
import { useShoppingCart } from 'use-shopping-cart';
import ShoppingCart from './ShoppingCart';
import '../styles/Checkout.css';

export default function Checkout({ isMobile, currentPage, handlePageChange }) {
  return (
    <Container className='checkout-view'>
      <Row className='align-items-start'>
        <Col className='checkout-column'>
          <img src={checkoutImage} className='checkout-image' />
          <span className='mx-3'>Checkout</span>
          <Col className='second-column'>
            <span>Continue Browsing</span>
          </Col>
        </Col>

        <Col>
          <hr />
        </Col>
      </Row>
      <Row className='checkout-row'>
        <Col>
          <ShoppingCart />
        </Col>
        <Col className='checkout-card-details'>
          <h5>Card Details</h5>
          <p>Card Type</p>
          <form class='mt-4'>
            <div class='form-outline form-white mb-4'>
              <input
                type='text'
                id='typeName'
                class='form-control form-control-lg'
                siez='17'
                placeholder="Cardholder's Name"
              />
              <label class='form-label' for='typeName'>
                Cardholder's Name
              </label>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
