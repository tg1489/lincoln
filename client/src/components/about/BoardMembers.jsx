import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
export default function BoardMembers() {
  return (
    <>
      <Col md={6} sm={12} className='board-members'>
        <h3>2023-24 Board Members</h3>
        <ul>
          <li>President: Elizabeth Conley</li>
          <li>Vice President & Member Coordinator: Robyn</li>
          <li>
            Green Treasurer: Recording Secretary & Newsletter Editor: Birthday
            Board
          </li>
          <li>
            Coordinator: Uma Murigan Spirit Wear Coordinator: Fundraising &
            Sponsor
          </li>
        </ul>
      </Col>
    </>
  );
}
