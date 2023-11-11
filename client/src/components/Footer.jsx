import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import youtube from '../assets/yt.png';
import facebook from '../assets/fb.png';
import twitter from '../assets/x.png';
import email from '../assets/email.png';
import donate from '../assets/donate.png';
import Fundraising from './Fundraising.jsx';
import '../styles/Footer.css';

export default function Footer({ handlePageChange, currentPage }) {
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    setActiveTab(currentPage);
  }, [currentPage]);

  const handleClick = (tab) => {
    setActiveTab(tab);
    handlePageChange(tab);
  };

  return (
    <div>
      <nav className='navbar navbar-dark bg-dark footer'>
        <a href='mailto:lncpto@gmail.com'>
          <img className='social-media-icons mx-1' src={email} />
        </a>
        <a
          href='https://www.facebook.com/groups/LincolnSchoolPTO/'
          target='_blank'
        >
          <img className='social-media-icons mx-1' src={facebook} />
        </a>
        <a href='https://twitter.com/pto_lincoln8?lang=en' target='_blank'>
          <img className='social-media-icons mx-1' src={twitter} />
        </a>
        <a
          href='https://www.youtube.com/results?search_query=lincoln+elementary+school+edison'
          target='_blank'
        >
          <img className='social-media-icons mx-1' src={youtube} />
        </a>

        <img
          className='social-media-icons mx-1'
          src={donate}
          onClick={() => handleClick('fundraising')}
        />
      </nav>
    </div>
  );
}
