import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import '../../styles/Profile.css';
import ShoppingCartTitle from '../ShoppingCartTitle';
import ShoppingCart from '../ShoppingCart';


export default function Profile({ isMobile, currentPage, handlePageChange }) {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Container className='profile-view'>
      <Row className='profile-row'>
        <Col>
          {isAuthenticated && (
            <article>
              {/* Username */}
              <div className='mb-4'>
                {user?.picture && (
                  <img src={user.picture} alt={'Default pic'} />
                )}
              </div>
              {/* Sign Out Button */}
              <LogoutButton />
            </article>
          )}
        </Col>
        {/* Shopping Cart Title */}
        <ShoppingCartTitle />
      </Row>
      <ShoppingCart
        isMobile={isMobile}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
}
