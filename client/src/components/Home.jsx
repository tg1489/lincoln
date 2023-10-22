import React from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import sign from '../assets/sign2.png';
import '../styles/Home.css';

export default function Home({ isMobile }) {
  let counter = 0;
  const cardKey = () => counter++;

  return (
    <>
      <Container className='mb-5'>
        <Row className={isMobile ? 'mobile-columns' : ''}>
          <div className={`mt-5 mb-5 ${isMobile ? 'col' : 'col-6'}`}>
            <img src={sign} className='main-picture' />
          </div>
          <div className={isMobile ? 'col' : 'col-6'}>
            <h6>LINCOLN ELEMENTARY'S P.T.O.</h6>
            <p>
              On behalf of the Lincoln Elementary PTO, welcome to the 2023-2024
              school year!{' '}
            </p>
            <p>
              For those of you who are new to Lincoln, we are looking forward to
              meeting you and helping you become a part of the school community!
              Together we can show our children that they are valued and loved
              by providing them with a fun-filled and enriching year.
            </p>
            <p>
              For those returning parents, we thank you for your ongoing support
              without which we would not be able to continue to provide a
              supportive and positive environment for our students. The ability
              of our PTO to supplement our children’s day-to-day instruction is
              a result of the commitment and efforts of ALL its members, and we
              simply cannot do it without you.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}
