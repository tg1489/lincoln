import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import chalkboard from '../assets/chalkboard.png';
import '../styles/PTO.css';

export default function PTO({ isMobile }) {
  return (
    <>
      <Container className='app-container'>
        <h1 className='pto-title'>
          PTO Meeting Schedule <span className='pto-year'>2023-24</span>
        </h1>
        <div className={isMobile ? 'mobile-chalkboard' : 'chalkboard'}>
          <Row className='line-1'>Hidden</Row>
          <Row className='line-2'>
            6:00 PM in Lincoln School Multipurpose Room
          </Row>
          <Row className='line-3'>Test</Row>
          <Row className='line-4'>December 6th</Row>
          <Row className='line-5'>February 22nd</Row>
          <Row className='line-6'>Test</Row>
          <Row className='line-7'>Additional Dates to Follow</Row>
        </div>
      </Container>
    </>
  );
}
