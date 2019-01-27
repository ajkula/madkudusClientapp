import axios from 'axios';
import config from '../../config';
// import moment from 'moment';

export const fetchAll = () => {
let url = config.routes.kudus.root;

  return new Promise((resolve, reject) => {
    axios.request({
      url,
      method: 'get',
    })
    .then(response => {
      return resolve(response.data);
    })
    .catch(error => {
      return reject(error.data);
    })
  })
};