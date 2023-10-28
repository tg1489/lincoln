import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import bd from '../assets/birthdays/bd.png';
import confetti from 'canvas-confetti';
import '../styles/Birthdays.css';

export default function Birthdays() {
  useEffect(() => {
    const shootConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    };
    shootConfetti();
  }, []);

  return (
    <div>
      <Container>
        <Row className='mt-5 mb-5 one'>
          <div className='col'>
            <h2 className='birthday-title'>
              Make your child a celebrity in their own school!
            </h2>
          </div>
          <div className='col'>
            <img src={bd} className='birthday-sign' alt='birthday sign' />
          </div>
        </Row>
        <Row>
          <p>
            ​ Make your child feel extra special by having their name (first
            name and last initial) displayed on the Lincoln School Marquee in
            the front of the school for a minimum of three days. Simply click
            here to fill out the form! PAYMENT MUST BE MADE AT LEAST ONE WEEK
            PRIOR TO YOUR CHILD’S BIRTHDAY! Requests will be accommodated on a
            first come, first serve basis.
          </p>
        </Row>

        <Row>
          <p>
            {' '}
            Here is the Lincoln School's Birthday Celebration Procedure:
            Beginning September 2016, birthday celebrations will no longer
            include food/drinks/snacks. A child’s birthday will be celebrated
            with a song and parents may choose to come in and read a short
            story/picture book (like our mystery reader) at a time prearranged
            with the teacher and/or send in a book for the classroom library
            with your child's name, and a short dedication statement on the
            inside cover of the book. Parents should contact their child’s
            teacher to find out the best way to celebrate birthdays in that
            class. ​ According to NJ School Nutrition Policy, cupcakes, ice
            cream, soda, donuts, and candy are not permitted.
          </p>
        </Row>
        <Row className='flex-column'>
          <div className='col'>
            <p>
              ​ **No gifts or goody bags of any kind can be distributed. Any
              treats of this kind are best served at home and will not be
              distributed and will be returned. Parents should not send in any
              toys. ​ Students may not pass out invitations to birthday parties
              unless every child in the class is invited. If this is not the
              case, invitations will be sent home. ​{' '}
            </p>
          </div>
          <div className='col'>
            <p>
              You can view the District policy at:&nbsp;
              <a href='https://www.edison.k12.nj.us/cms/lib2/NJ01001623/Centricity/domain/36/district%20policies/8505.pdf'>
                https://www.edison.k12.nj.us/cms/lib2/NJ01001623/Centricity/domain/36/district%20policies/8505.pdf
              </a>
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
}
