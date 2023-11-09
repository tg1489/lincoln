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
        <Col className='mb-3 mt-3'>
          <h3>Contact Us</h3>
        </Col>
        <Row className='contact-row-mini mb-1'>
          <Col md={1}>
            <img src={location} className='small-icons' />
          </Col>
          <Col md={1} className='location'>
            53 Brookville Rd Edison, NJ 08817
          </Col>
        </Row>
        <Row className='contact-row-mini mb-1'>
          <Col md={1}>
            <img src={email} className='small-icons' />
          </Col>
          <Col md={1}>lncpto@gmail.com</Col>
        </Row>
        <Row className='contact-row-mini mb-1'>
          <Col md={1}>
            <img src={x} className='small-icons' />
          </Col>
          <Col md={1}>@pto_lincoln8</Col>
        </Row>
        <Row className='contact-row-mini mb-1'>
          <Col md={1}>
            <img src={facebook} className='small-icons' />
          </Col>
          <Col md={1}>@LNCPROUD</Col>
        </Row>
      </Row>
    </>
  );
}
