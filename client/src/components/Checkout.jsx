import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import checkoutImage from '../assets/checkout.png';

export default function Checkout({ isMobile, currentPage, handlePageChange }) {
  return (
    <Container>
      <Row>
        <Col>
          <img src={checkoutImage} className='checkout-image' />
          <hr />
        </Col>
      </Row>
    </Container>
  );
}
