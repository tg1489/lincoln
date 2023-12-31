import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import volunteers from '../assets/volunteers/volunteers.png';
import '../styles/Volunteers.css';

export default function Volunteers({ isMobile }) {
  return (
    <>
      <Container>
        <Row className={`mb-5 mt-5 ${isMobile ? ' volunteers-row' : ''}`}>
          <div className={isMobile ? 'col volunteers-col' : 'col-6'}>
            <div>
              <img
                src={volunteers}
                className={
                  isMobile ? 'mobile-volunteers-image' : 'volunteers-image'
                }
                alt='volunteer quote'
              />
            </div>
          </div>
          <div className={`mx-5 ${isMobile ? 'col volunteers-col' : 'col-6'}`}>
            <p className='volunteers-paragraph'>
              As parents we know how busy day to day activities can be. We know
              that there may be just a few hours that you can spare, and we
              completely understand..... but sometimes that's just all we need!
              <br />
              <br />​ If you could spare just 3-4 hours during the day or at an
              evening event (just once a year), would you? ​ If you would like
              to be notified when we are in need of volunteers, please fill out
              the volunteer form and we will notify you when the need arises.
            </p>
          </div>
        </Row>
        <Row className='volunteers-link-row'>
          <div className='col mb-2'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSczBJ2t018T6Msn1zuPeubm3rK_G4IoUM0vYwOIfw7zhukWLg/viewform'
              target='_blank'
            >
              Class Representative Registration
            </a>
          </div>

          <div className='col mb-2'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSftuI3FCv_tD7C4Zom6PhpAoCcTocVH-kTHec62QUNqh4-_dQ/viewform'
              target='_blank'
            >
              Fun Day Volunteer Registration
            </a>
          </div>

          <div className='col mb-2'>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSfMhCpsFoaa4phw7g2qaQM82TqndZsqM2BbR-q349aMQqz57A/viewform'
              target='_blank'
            >
              Fall Fest Volunteer Registration
            </a>
          </div>
        </Row>
      </Container>
    </>
  );
}
