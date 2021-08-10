import axios from 'axios';
import memoize from 'lodash.memoize';

const requestUsers = (query?: string) => {
  if (query) {
    return axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_SEARCH_URL}?q=${query}`,
      headers: {
        Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
      },
    });
  }
  return axios({
    method: 'get',
    url: 'https://api.github.com/users',
    headers: {
      Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
    },
  });
};

export default memoize(requestUsers);
