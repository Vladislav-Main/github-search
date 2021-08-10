import { useEffect, useState } from 'react';
import { UserList } from '../components/UserList';
import  requestUsers  from '../services/requestUsers';
import './home.css';

export const Home = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    requestUsers(query)
      .then((res) => {
        query ? setUsers(res.data.items) : setUsers(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      })
      .catch((e) => console.log(e.message));
  }, [query]);

  if (isLoading) {
    return (
      <div className="wrapper-style">
        <div className="spinner">
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <form className="form-input">
        <input
          type="search"
          placeholder="Please input searched name..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <UserList users={users} />
    </>
  );
};
