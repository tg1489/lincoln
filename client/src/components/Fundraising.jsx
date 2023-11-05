import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Fundraising() {
  return (
    <Container>
      <Row>
        <div className='col'>
          <p>
            Asking for money is never an easy task, especially when part of our
            mission is to help raise funds for items such as student supplies,
            transportation, scholarships and educational & social events.
            However, we strive to not pressure anyone to solicit sales or make
            unwanted purchases. ​{' '}
          </p>
          <h4>Methods of Giving are as follows: </h4>
          <ul className='fundraising-ul'>
            <li>
              Checks can be sent into school with your child in a sealed
              envelope marked "PTO donation". You may also mail your payment to:
              Lincoln Elementary School PTO 53 Brookville Rd Edison, NJ 08817{' '}
            </li>
            <li>
              Credit Card Contributions can be made through paypal by clicking
              the Donate link at the bottom of this page.
            </li>
            <li>
              Matching Gifts: Many businesses offer a Matching Gift program for
              their employees to double their charitable donations. If your
              employer is a participant, please ask them for the necessary forms
              needed to process the donation.
            </li>
            <li>
              There are several retailers (listed here) that will donate money
              to our organization based on the purchases you already make! No
              additional purchases are required by you, all it takes is a little
              help. Click on each company to find out more!
            </li>
          </ul>
          <p>
            Share this page with others, which grows our community to help our
            school!
          </p>
        </div>
      </Row>
    </Container>
  );
}
