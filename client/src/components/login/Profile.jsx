import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} />}
        <h5>{user?.nickname}</h5>
        <h5>{user?.email}</h5>
        <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul>

        <LogoutButton />
      </article>
    )
  );
}
