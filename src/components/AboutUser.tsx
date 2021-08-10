import moment from 'moment';
import { FC } from 'react';
import { IOneUser } from '../types/types';
import './AboutUser.css';

interface UserItemProps {
  user: IOneUser;
}

export const AboutUser: FC<UserItemProps> = ({ user }) => {
  return (
    <div>
      <div className="user-info">
        <img
          src={user.avatar_url}
          alt="user avatar"
          className="user-info-item user-photo"
        />
        <div className="user-info-item">
          <div className="user-info-item">User Name: {user.name}</div>
          <div className="user-info-item">User email: {user.email}</div>
          <div className="user-info-item">User location: {user.location}</div>
          <div className="user-info-item">
            Joined: {moment(user.created_at).add(1, 'days').calendar()}
          </div>
          <div className="user-info-item">Followers: {user.followers}</div>
          <div className="user-info-item">Following: {user.following}</div>
        </div>
      </div>
      <div className="user-bio">{user.bio}</div>
    </div>
  );
};
