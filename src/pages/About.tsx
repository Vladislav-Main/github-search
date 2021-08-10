import { useEffect, useState, FC } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { AboutUser } from '../components/AboutUser';
import { UserRepos } from '../components/UserRepos';
import  requestOneUser  from '../services/requestOneUser';
import { IOneUser } from '../types/types';

export const About: FC = () => {
  const [user, setUser] = useState<IOneUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const {
    params: { userId },
  } = useRouteMatch<{ userId: string }>();

  useEffect(() => {
    if (userId) {
      requestOneUser(userId)
        .then((res) => {
          setUser(res.data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        })
        .catch((e) => e.message);
    }
  }, [userId]);

  if (isLoading) {
    return (
      <div className="wrapper-style">
        <div className="spinner">
          <span>Loading...</span>
        </div>
      </div>
    );
  }
  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <>
      <AboutUser user={user} />
      <UserRepos user={user} />
    </>
  );
};
