import React from 'react';
import { Container, Row } from 'react-bootstrap';
import volunteers from '../assets/volunteers/volunteers.png';
import '../styles/Volunteers.css';

export default function Volunteers() {
  return (
    <div className='volunteers'>
      <Container>
        <Row className='mb-5 mt-5'>
          <div className='col-6 volunteers-col-1'>
            <img
              src={volunteers}
              className='volunteers-image'
              alt='volunteer quote'
            />
          </div>
          <div className='col-6 volunteers-col-2'>
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
      </Container>
    </div>
  );
}
