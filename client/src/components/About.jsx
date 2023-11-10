import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutTab from './about/AboutTab.jsx';
import Contact from './about/Contact.jsx';
import BoardMembers from './about/BoardMembers.jsx';
import '../styles/About.css';

export default function About({ isMobile }) {
  const [activeTab, setActiveTab] = useState('about');
  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  const pageChanger = () => {
    switch (activeTab) {
      case 'about':
        return <AboutTab />;
        break;
      case 'contact':
        return <Contact isMobile={isMobile} />;
        break;
      case 'board-members':
        return <BoardMembers />;
        break;
      default:
        return <AboutTab />;
    }
  };

  return isMobile ? (
    <>
      <Container>
        <Row className='mb-5 mt-2'>
          <Col
            className={`about ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleClick('about')}
          >
            About
          </Col>
          <Col
            className={`contact ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => handleClick('contact')}
          >
            Contact
          </Col>
          <Col
            className={`board-members ${
              activeTab === 'board-members' ? 'active' : ''
            }`}
            onClick={() => handleClick('board-members')}
          >
            Board Members
          </Col>
        </Row>
        <Row className='pagechanger-row'>{pageChanger()}</Row>
      </Container>
    </>
  ) : (
    <div className='about-fragment'>
      <Container>
        <Row className='about-row'>
          <Col
            md={4}
            className={`mt-5 about ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => handleClick('about')}
          >
            <div>About</div>
            <hr className='about-hr' />
          </Col>
          <Col
            md={4}
            className={`mt-5 contact ${
              activeTab === 'contact' ? 'active' : ''
            }`}
            onClick={() => handleClick('contact')}
          >
            <div className=''>Contact</div>
            <hr className='about-hr' />
          </Col>
          <Col
            md={4}
            className={`mt-5 board-members ${
              activeTab === 'board-members' ? 'active' : ''
            }`}
            onClick={() => handleClick('board-members')}
          >
            <div className=''>Board Members</div>
            <hr className='about-hr' />
          </Col>
        </Row>
        <Row className='pagechanger-row'>{pageChanger()}</Row>
      </Container>
    </div>
  );
}
