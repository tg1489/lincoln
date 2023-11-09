import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import email from '../../assets/about/email.png';
import x from '../../assets/about/x.png';
import facebook from '../../assets/about/facebook.png';
import location from '../../assets/about/location.png';
export default function Contact() {
  return (
    <>
      <Row className='contact-row'>
        <Col>
          <h3>Contact Us</h3>
        </Col>
        <Row className='test'>
          <Col md={1} className='test-col'>
            <img src={location} className='small-icons' />
          </Col>
          <Col md={1} className='test-col location'>
            53 Brookville Rd Edison, NJ 08817
          </Col>
        </Row>
        <Row className='test'>
          <Col md={1} className='test-col'>
            <img src={email} className='small-icons' />
          </Col>
          <Col md={1} className='test-col'>
            lncpto@gmail.com
          </Col>
        </Row>
        <Row className='test'>
          <Col md={1} className='test-col'>
            <img src={x} className='small-icons' />
          </Col>
          <Col md={1} className='test-col'>
            @pto_lincoln8
          </Col>
        </Row>
        <Row className='test'>
          <Col md={1} className='test-col'>
            <img src={facebook} className='small-icons' />
          </Col>
          <Col md={1} className='test-col'>
            @LNCPROUD
          </Col>
        </Row>
      </Row>
    </>
  );
}
