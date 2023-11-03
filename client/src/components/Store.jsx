import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import school from '../assets/school2.png';
import { storeImages } from '../utils/storeImages';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Store.css';

export default function Store({ isMobile }) {
  const cardKey = uuidv4();

  useEffect(() => {
    // 21 images
    console.log(storeImages);
  }, []);

  return (
    <div>
      <Container className='store-container'>
        <Row className={`membership mt-5 mb-5`}>
          <>
            <Col className='myCol' md={3}>
              <Card
                key={cardKey}
                className={isMobile ? '' : 'store-card'}
                onClick={() => alert('ITS A TRAP')}
              >
                <Card.Img className='card-image' src={school}></Card.Img>
                <Card.Body>
                  <Card.Title>Membership</Card.Title>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                  <Card.Text>Standard PTO Family Membership 2023-24</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image'
                  src={storeImages[15].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Staff Membership</Card.Title>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                  <Card.Text>Staff PTO Family Membership 2023-24</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = storeImages[3].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[2].src)
                  }
                  className='card-image'
                  src={storeImages[2].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Cinch Pack</Card.Title>
                  <Card.Subtitle>$15.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = storeImages[8].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[6].src)
                  }
                  className='card-image'
                  src={storeImages[6].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Lincoln Pride Full Zipper Hoodie</Card.Title>
                  <Card.Subtitle>$25.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = storeImages[8].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[7].src)
                  }
                  className='card-image'
                  src={storeImages[7].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Lincoln Pride Pull Over Hoodie</Card.Title>
                  <Card.Subtitle>$22.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  onMouseOver={(e) =>
                    (e.currentTarget.src = storeImages[20].src)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.src = storeImages[19].src)
                  }
                  className='card-image'
                  src={storeImages[19].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Tie-Dye Short Sleeve Shirt</Card.Title>
                  <Card.Subtitle>$15.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image'
                  src={storeImages[9].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Linc the Lion Plush Toy</Card.Title>
                  <Card.Subtitle>$5.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[0].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Birthday Board!</Card.Title>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[12].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Sponsorship</Card.Title>
                  <Card.Subtitle>$10.00</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>

            <Col className='myCol' md={3}>
              <Card key={cardKey} className={isMobile ? '' : 'store-card'}>
                <Card.Text className='sale'>Sale</Card.Text>
                <Card.Img
                  className='card-image image-board'
                  src={storeImages[11].src}
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Short Sleeve T-Shirts</Card.Title>
                  <Card.Subtitle className='strikethrough'>
                    $10.00
                  </Card.Subtitle>
                  <Card.Subtitle>$8.00</Card.Subtitle>
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
        </Row>

        <Row></Row>
      </Container>
    </div>
  );
}
