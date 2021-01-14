import Axios from 'axios';
import Store from '@/store';

Axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`;

Axios.interceptors.request.use(config => {

  const token = Store.getters['auth/token'];
  config.headers.Authorization =  token ? `Bearer ${token}` : '';

  return config;
});

Axios.interceptors.response.use(response => {

  const ttl = Store.getters['auth/ttl'];
  const isRefreshing = Store.getters['auth/isRefreshing'];

  if(!isRefreshing && response.config.url !== '/auth/login' && ttl < Date.now()){
    Store.dispatch('auth/refresh');
  }

  return response;
}, error => {

  if (error.response.status === 401 && error.response.config.url !== '/auth/logout') {
    Store.dispatch('auth/logout');
  }

  return Promise.reject(error);
});

export default Axios;








