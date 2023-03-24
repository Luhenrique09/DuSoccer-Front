import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-in`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/users/sign-up`, body);

  return promise;
}

const api = {
  login,
  signUp,
}

export default api;