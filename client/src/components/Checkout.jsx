import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import checkoutImage from '../assets/checkout.png';
import '../styles/Checkout.css';

export default function Checkout({ isMobile, currentPage, handlePageChange }) {
  return (
    <Container className='checkout-view'>
      <Row className='align-items-start'>
        <Col className='checkout-column'>
          <img src={checkoutImage} className='checkout-image' />
        </Col>
      </Row>
    </Container>
  );
}
