import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mobile from '../../assets/about/mobile.png';
export default function Contact() {
  return (
    <>
      <Row className='contact-row'>
        <Col>
          <h3>Contact Us</h3>
        </Col>

        <Col>
          <p>53 Brookville Rd Edison, NJ 08817</p>
        </Col>
        <Row className='test justify-content-center'>
          <Col md={1} className='test-col'>
            <img src={mobile} className='small-icons' />
          </Col>
          <Col md={1} className='test-col'>
            lncpto@gmail.com
          </Col>
        </Row>
        <Col>
          <p>Twitter:@pto_lincoln8</p>
        </Col>
        <Col>
          <p>Facebook: @LNCPROUD</p>
        </Col>
      </Row>
    </>
  );
}
