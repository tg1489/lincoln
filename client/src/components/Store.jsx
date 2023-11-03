import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import school from '../assets/school2.png';
import { storeImages } from '../utils/storeImages';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Store.css';

export default function Store({ isMobile }) {
  const cardKey = uuidv4();

  useEffect(() => {
    // 21 images
    console.log(storeImages[0].src);
  }, []);

  return (
    <div>
      <Container className='store-container'>
        <Row className={`membership mt-5 mb-5 ${isMobile ? 'mobile-row' : ''}`}>
          {isMobile ? (
            // Mobile
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
            // Standard
            <>
              <Col className='myCol' md='4'>
                <Card
                  key={cardKey}
                  className='store-card'
                  onClick={() => alert('ITS A TRAP')}
                >
                  <Card.Img src={school}></Card.Img>
                  <Card.Body>
                    <Card.Title>Membership</Card.Title>
                    <Card.Subtitle>$10.00</Card.Subtitle>
                    <Card.Text>
                      Standard PTO Family Membership 2023-24
                    </Card.Text>
                  </Card.Body>
                </Card>

                <Card
                  key={cardKey}
                  className='store-card'
                  onClick={() => alert('ITS A TRAP')}
                >
                  <Card.Img src={school}></Card.Img>
                  <Card.Body>
                    <Card.Title>Staff Membership</Card.Title>
                    <Card.Subtitle>$10.00</Card.Subtitle>
                    <Card.Text>Staff PTO Family Membership 2023-24</Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* <div className='col-6'>
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
              </div> */}
            </>
          )}
        </Row>
      </Container>
    </div>
  );
}
