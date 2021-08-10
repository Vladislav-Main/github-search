import { FC } from 'react';
import { IRepos } from '../types/types';

interface ReposListProps {
  repo: IRepos;
}

export const UserRepoItem: FC<ReposListProps> = ({ repo }) => {
  return (
    <a href={repo.html_url} className='link'>
      <div className="user-card">
        <div className="card-item">{repo.name.toUpperCase()}</div>
        <div className="card-item">forks: {repo.forks}</div>
        <div className="card-item">stars: {repo.stargazers_count}</div>
      </div>
    </a>
  );
};
