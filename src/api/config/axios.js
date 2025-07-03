import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ehbackendmain.onrender.com/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export default api;