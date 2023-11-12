import React from 'react';
import LoginButton from './login/LoginButton.jsx';
import LogoutButton from './login/LogoutButton.jsx';
import Profile from './login/Profile.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Profile.css';

export default function Login() {
  const { isLoading, error } = useAuth0();
  return (
    <div className='profile-view'>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <Profile />
        </>
      )}
    </div>
  );
}
