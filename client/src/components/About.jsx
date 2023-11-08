import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AboutTab from './about/AboutTab.jsx';
import Contact from './about/Contact.jsx';
import BoardMembers from './about/BoardMembers.jsx';
import '../styles/About.css';

export default function About() {
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
        return <Contact />;
        break;
      case 'board-members':
        return <BoardMembers />;
        break;
      default:
        return <AboutTab />;
    }
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
        </Row>
        <Row>{pageChanger()}</Row>
      </Container>
    </div>
  );
}
