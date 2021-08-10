import { FC } from 'react';
import { IRepos } from '../types/types';
import { UserRepoItem } from './UserRepoItem';

interface ReposListProps {
  repos: IRepos[];
}

export const UserReposList: FC<ReposListProps> = ({ repos }) => {
  return (
    <div className="users-cards">
      {repos.map((repo) => (
        <UserRepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
