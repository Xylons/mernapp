import axios from 'axios';
export default axios.create({
  baseURL: 'https://mernapi-fran.herokuapp.com/'
  //baseURL: 'http://localhost:5000/'
});
