import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../styles/Header.css';
import '../../styles/Profile.css';

export default function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <span className='login' onClick={() => loginWithRedirect()}>
        Login
      </span>
    )
  );
}
