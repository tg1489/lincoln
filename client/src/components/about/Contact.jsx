import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import email from '../../assets/about/email.png';
import x from '../../assets/about/x.png';
import facebook from '../../assets/about/facebook.png';
import location from '../../assets/about/location.png';
export default function Contact() {
  return (
    <div className='main-container'>
      <Row className='main-row'>
        <Row className='contact-row'>
          <Col className='mb-3 mt-3 contact-col'>
            <h3>Contact Us</h3>
          </Col>
          <Row className='contact-row-mini mb-1'>
            <Col md={1} className='contact-col'>
              <img src={location} className='small-icons' />
            </Col>
            <Col md={1} className='location contact-col'>
              53 Brookville Rd Edison, NJ 08817
            </Col>
          </Row>
          <Row className='contact-row-mini mb-1'>
            <Col md={1} className='contact-col'>
              <img src={email} className='small-icons' />
            </Col>
            <Col md={1} className='contact-col'>
              lncpto@gmail.com
            </Col>
          </Row>
          <Row className='contact-row-mini mb-1'>
            <Col md={1} className='contact-col'>
              <img src={x} className='small-icons' />
            </Col>
            <Col md={1} className='contact-col'>
              @pto_lincoln8
            </Col>
          </Row>
          <Row className='contact-row-mini mb-1'>
            <Col md={1} className='contact-col'>
              <img src={facebook} className='small-icons' />
            </Col>
            <Col md={1} className='contact-col'>
              @LNCPROUD
            </Col>
          </Row>
        </Row>
      </Row>
    </div>
  );
}
