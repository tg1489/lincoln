import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import checkoutImage from '../assets/checkout.png';
import { useShoppingCart } from 'use-shopping-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCcMastercard,
  faCcVisa,
  faCcAmex,
  faCcPaypal,
} from '@fortawesome/free-brands-svg-icons';
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
          <Col className='d-flex flex-direction-row mt-5'>
            <p className='mx-2 me-2'>Card Type</p>
            <a href='#!' type='submit' className='text-black'>
              <FontAwesomeIcon icon={faCcMastercard} className='fa-2x me-2' />
            </a>
            <a href='#!' type='submit' className='text-black'>
              <FontAwesomeIcon icon={faCcVisa} className='fa-2x me-2' />
            </a>
            <a href='#!' type='submit' className='text-black'>
              <FontAwesomeIcon icon={faCcAmex} className='fa-2x me-2' />
            </a>
            <a href='#!' type='submit' className='text-black'>
              <FontAwesomeIcon icon={faCcPaypal} className='fa-2x' />
            </a>
          </Col>

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
