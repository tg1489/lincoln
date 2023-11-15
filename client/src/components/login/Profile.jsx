import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './LogoutButton';
import '../../styles/Profile.css';

export default function Profile() {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <article className='profile-view'>
        {user?.picture && <img src={user.picture} alt={'Default pic'} />}
        <h5>{user?.nickname}</h5>
        <h5>{user?.email}</h5>
        {/* <ul>
          {Object.keys(user).map((objKey, i) => (
            <li key={i}>
              {objKey}: {user[objKey]}
            </li>
          ))}
        </ul> */}

        <LogoutButton />
      </article>
    )
  );
}
