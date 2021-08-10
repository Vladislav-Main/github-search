import { FC } from 'react';
import { IUser } from '../types/types';
import { UserItem } from './UserItem';

import './UserList.css';

interface UserListProps {
  users: IUser[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className="users-cards">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
