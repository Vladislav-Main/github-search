import axios from 'axios';
import memoize from 'lodash.memoize';

const requestOneUser = (userLogin?: string) => {
  return axios({
    method: 'get',
    url: `${process.env.REACT_APP_API_URL}/${userLogin}`,
    headers: {
      Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
    },
  });
};
export default memoize(requestOneUser);
