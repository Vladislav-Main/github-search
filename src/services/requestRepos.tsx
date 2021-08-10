import axios from 'axios';
import memoize from 'lodash.memoize';

const requestRepos = (userName?: string) => {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/${userName}/repos`,
    headers: {
      Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
    },
  });
};

export default memoize(requestRepos);
