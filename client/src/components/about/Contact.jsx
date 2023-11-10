import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import email from '../../assets/about/email.png';
import x from '../../assets/about/x.png';
import facebook from '../../assets/about/facebook.png';
import location from '../../assets/about/location.png';
export default function Contact({ isMobile }) {
  return isMobile ? (
    <div className='mobile-fragment'>
      <Container>
        <Row>
          <Col className='mb-5'>
            <h3>Contact Us</h3>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <img src={location} className='small-icons' />
          </Col>
          <Col>53 Brookville Rd Edison, NJ 08817</Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <img src={email} className='small-icons' />
          </Col>
          <Col>lncpto@gmail.com</Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <img src={x} className='small-icons' />
          </Col>
          <Col>@pto_lincoln8</Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <img src={facebook} className='small-icons' />
          </Col>
          <Col>@LNCPROUD</Col>
        </Row>
      </Container>
    </div>
  ) : (
    // Standard
    <div className='main-container'>
      <Container>
        <Row className='new-contact-row'>
          <Col>
            <h3>Contact Us</h3>
          </Col>
        </Row>
        <Row>
          <Col md={5} className='new-contact-col mb-2'>
            <img src={location} className='small-icons' />
          </Col>
          <Col className='new-contact-col2 mb-2'>
            53 Brookville Rd Edison, NJ 08817
          </Col>
        </Row>
        <Row>
          <Col md={5} className='new-contact-col mb-2'>
            <img src={email} className='small-icons' />
          </Col>
          <Col className='new-contact-col2 mb-2'>lncpto@gmail.com</Col>
        </Row>
        <Row>
          <Col md={5} className='new-contact-col mb-2'>
            <img src={x} className='small-icons' />
          </Col>
          <Col className='new-contact-col2 mb-2'>@pto_lincoln8</Col>
        </Row>
        <Row>
          <Col md={5} className='new-contact-col mb-2'>
            <img src={facebook} className='small-icons' />
          </Col>
          <Col className='new-contact-col2 mb-2'>@LNCPROUD</Col>
        </Row>
      </Container>
    </div>
  );
}
