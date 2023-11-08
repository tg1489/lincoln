import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function BoardMembers() {
  return (
    <>
      <Col className='board-members-content sketchy'>
        <h3>2023-24 Board Members</h3>
        <div>
          <p>
            President: <span className='member'>Elizabeth Conley</span>
          </p>
          <p>
            Vice President & Member Coordinator:{' '}
            <span className='member'>Robyn</span>
          </p>
          <p>Recording Secretary & Newsletter Editor: ________</p>
          <p>
            Birthday Board Coordinator:{' '}
            <span className='member'>Uma Murigan</span>
          </p>
          <p>Spirit Wear Coordinator: ________</p>
          <p>Fundraising & Sponsor Coordinator: ________</p>
        </div>
      </Col>
    </>
  );
}
