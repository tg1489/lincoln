import React from 'react';
import LoginButton from './login/LoginButton.jsx';
import LogoutButton from './login/LogoutButton.jsx';
import Profile from './login/Profile.jsx';
import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
  const { isLoading, error } = useAuth0();
  return (
    <>
      {error && <p>Authentication Error</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <Profile />
        </>
      )}
    </>
  );
}
