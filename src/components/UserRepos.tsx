import { FC } from 'react';
import { useEffect, useState } from 'react';
import requestRepos from '../services/requestRepos';
import { IOneUser, IRepos } from '../types/types';
import { UserReposList } from './UserReposList';

interface UserItemProps {
  user: IOneUser;
}
interface ReposListProps {
  repos: IRepos[];
}

export const UserRepos: FC<UserItemProps> = ({ user }) => {
  const [query, setQuery] = useState('');
  const [repos, setRepos] = useState<IRepos[]>([]);
  useEffect(() => {
    requestRepos(user.login).then((res) => setRepos(res.data));
  }, [user.login]);

  const filterRepos: any = repos.filter((repo) => {
    return repo.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div>
      <form className="form-input">
        <input
          type="search"
          placeholder="please input..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <UserReposList repos={filterRepos} />
    </div>
  );
};
