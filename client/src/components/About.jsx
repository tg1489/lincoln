import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('about');
  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='about-fragment'>
      <Container>
        <Row className='about-row'>
          <Col
            md={4}
            className={`mt-5 about ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleClick('about')}
          >
            <div>About</div>
            <hr />
          </Col>
          <Col
            md={4}
            className={`mt-5 contact ${
              activeTab === 'contact' ? 'active' : ''
            }`}
            onClick={() => handleClick('contact')}
          >
            <div className=''>Contact</div>
            <hr />
          </Col>
          <Col
            md={4}
            className={`mt-5 board-members ${
              activeTab === 'board-members' ? 'active' : ''
            }`}
            onClick={() => handleClick('board-members')}
          >
            <div className=''>Board Members</div>
            <hr />
          </Col>

          {/* <Col md={6} sm={12} className='board-members'>
            <h3>2023-24 Board Members</h3>
            <ul>
              <li>President: Elizabeth Conley</li>
              <li>Vice President & Member Coordinator: Robyn</li>
              <li>
                Green Treasurer: Recording Secretary & Newsletter Editor:
                Birthday Board
              </li>
              <li>
                Coordinator: Uma Murigan Spirit Wear Coordinator: Fundraising &
                Sponsor
              </li>
            </ul>
          </Col>

          <Col md={10}>
            <p>
              OUR MISSION The Lincoln Elementary School Parent-Teacher
              Organization (PTO) is an approved Non-Profit Organization under
              Internal Revenue Code, Section 501(c)(3). Our mission is to
              establish school and family interaction and nurture a close
              relationship between the parents, teachers, and students by
              providing social opportunities both inside and outside the
              classroom. Our PTO has sponsored fundraisers which help fund
              events such as the Harvest Festival, Breakfast with Frosty, Skate
              Night, and the very popular Fun Day! We have also helped raise
              funds for technology growth like the addition of IPADs for our
              younger grade students. We fund the student folder program,
              provide assistance to teachers in classroom settings for class
              parties, supplement student field trip transportation, support
              school and family social interaction, and provide a non-biased
              forum for sharing information on issues that impact our children.
              In addition, we fund two scholarships to former Lincoln Elementary
              School students who graduate Edison High School each year. It is
              our belief that the team effort of a parent teacher organization
              offers the best possible learning environment for our children.
            </p>
          </Col>

          <Col>
            <h3>Contact Us</h3>
            <p>
              53 Brookville Rd Edison, NJ 08817 ​ Email: lncpto@gmail.com
              Twitter: @pto_lincoln8 Facebook: @LNCPROUD
            </p>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}
