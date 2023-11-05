import React from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import bookfair from '../assets/bookfair.png';
import funday from '../assets/funday.png';
import '../styles/Events.css';

export default function Events({ isMobile }) {
  let counter = 0;
  const cardKey = () => counter++;

  return (
    <Container>
      <div className='mb-5'>
        <Row className='mt-5 mb-3 events-row'>
          <h2 className='title'>Our Latest News</h2>
        </Row>
        <Row className={`row-events mt-1 ${isMobile ? 'mobile-columns' : ''}`}>
          <Col className='mb-4'>
            {/* Add cards here */}
            <Card key={cardKey}>
              <Card.Img src={bookfair}></Card.Img>
              <Card.Body>
                <Card.Title>Book Fair</Card.Title>
                <Card.Subtitle>February 20th-23rd, 2024</Card.Subtitle>
                <Card.Subtitle>
                  April (Dates TBD) (Buy 1 Get 1 Free)
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
          <Col className='mb-4'>
            <Card key={cardKey}>
              <Card.Img src={funday}></Card.Img>
              <Card.Body>
                <Card.Title>Funday</Card.Title>
                <Card.Subtitle>Dates (TBD)</Card.Subtitle>
                <Card.Text>Click to volunteer for Funday</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
