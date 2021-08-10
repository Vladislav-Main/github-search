import { useEffect } from 'react';
import { useState } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import requestRepos from '../services/requestRepos';

import { IUser } from '../types/types';

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    requestRepos(user.login).then((res) => setRepos(res.data));
  }, [user.login]);
  return (
    <Link to={`/about/${user.login}`} className="link">
      <div className="user-card">
        <img
          src={user.avatar_url}
          alt="user avatar"
          className="card-item photo"
        />
        <div className="card-item">
          <div className="card-item">{user.login.toUpperCase()}</div>
          <div className="card-item">Num of repos: {repos.length}</div>
        </div>
      </div>
    </Link>
  );
};
