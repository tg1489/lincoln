import React from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import school from '../assets/school2.png';
import '../styles/Store.css';

export default function Store({ isMobile }) {
  return (
    <div>
      <Container className='store-container'>
        <Row className={`membership mt-5 mb-5 ${isMobile ? 'mobile-row' : ''}`}>
          {isMobile ? (
            <>
              <div className='col'>
                <h2 className='title'>Join Us</h2>
                <img src={school} className='membership-image mb-2' />
              </div>

              <div className='col'>
                <p>
                  Membership gives all Lincoln Elementary students in your
                  household access to discounts for some events that the PTO
                  sponsors for our students. Your membership fee helps the PTO
                  fund many educational and social programs throughout the year
                  for our children.
                </p>
                <p>
                  Please complete the membership form before proceeding with
                  your payment. Memberships require both form submission and
                  payment. Thank you!
                </p>
                <div>
                  <span className='membership-link'>Click Here</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='col-6'>
                <p>
                  Membership gives all Lincoln Elementary students in your
                  household access to discounts for some events that the PTO
                  sponsors for our students. Your membership fee helps the PTO
                  fund many educational and social programs throughout the year
                  for our children.
                </p>
                <p>
                  Please complete the membership form before proceeding with
                  your payment. Memberships require both form submission and
                  payment. Thank you!
                </p>
                <div>
                  <span className='membership-link'>Click Here</span>
                </div>
              </div>
              <div className='col-6'>
                <h2 className='title'>Join Us</h2>
                <img src={school} className='membership-image' />
              </div>
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}
