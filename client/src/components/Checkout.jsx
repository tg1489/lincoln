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
        <Col>
          <ShoppingCart />
        </Col>
      </Row>
    </Container>
  );
}
