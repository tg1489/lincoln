import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import boxtops from '../assets/fundraising/boxtops.png';
import shoparoo from '../assets/fundraising/shoparoo.png';
import stopshop from '../assets/fundraising/stopshop.png';
import amazon from '../assets/fundraising/amazon.png';
import '../styles/Fundraising.css';

export default function Fundraising() {
  return (
    <>
      <Row className='fundraising-row'>
        <Row className='fundraising-banner'>
          <div className='col-7 fundraising-col'>
            <h1 className='fundraising-title'>Do something incredible today</h1>
            <h3 className='col-11 fundraising-subtitle'>
              Online fundraising for the people and school you love.
            </h3>
            <button>Start Fundraising</button>
          </div>
        </Row>
        <div className='col'>
          <div className='ideas mt-5'>Ideas to get you started</div>
        </div>
        <div className='ideas-subtitle'>
          There are lots of ways to make good things happen
        </div>

        <Row className='ideas-row'>
          <div className='col-6 mb-5 mt-5 ideas-table'>
            <Row className='ideas-row-2'>
              <div className='col-6'>
                <div className='ideas-table-header'>Amazon</div>
              </div>
              <div className='col-6'>
                <img src={amazon} className='ideas-table-image' />
              </div>
            </Row>
            Amazon will donate 0.5% of the price of your eligible AmazonSmile
            purchases to our organization. All you have to do is link our school
            to your Amazon account! Click the Amazon link here to sign up!
          </div>
          <div className='col-6 mb-5 mt-5 ideas-table'>
            Register your Stop & Shop rewards card with A+ rewards and designate
            Lincoln Elementary School PTO. Then, each time you shop at Stop &
            Shop using your Stop & Shop rewards card, you will earn cash for our
            school! ​ Click on the Stop & Shop link here to register!
          </div>
        </Row>
        <Row className='ideas-row'>
          <div className='col-6 mb-5 mt-5 ideas-table'>
            Fundraising made easy! Download the free Shoparoo app, select our
            school from the list and start taking pictures of your everyday
            purchase receipts!
          </div>
          <div className='col-6 mb-5 mt-5 ideas-table'>
            Earn even more cash to help your school get what it needs through
            the Box Tops for Education® Bonus App. Turn your everyday receipts
            into cash for your school. ​ Click the link for more details!
          </div>
        </Row>

        {/* <div className='col'>
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
        </div> */}
      </Row>
    </>
  );
}
