import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

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


function getChampoionshipAll(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/championship`, config);

  return promise;
}

function logout(token){
  const config = createConfig(token);

  const promise = axios.delete(`${BASE_URL}/auth/logout`, config);

  return promise;
}

function createChampionship(body, token){
  const config = createConfig(token);

  const promise = axios.post(`${BASE_URL}/championship/user`, body, config);

  return promise;
}

function getChampoionshipUser(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/championship/user`, config);

  return promise;
}

function postTeams(body ,token){
  const config = createConfig(token);

  const promise = axios.post(`${BASE_URL}/teams`, body, config);

  return promise;
}

function deleteChampionship(championshipId ,token){
  const config = createConfig(token);

  const promise = axios.delete(`${BASE_URL}/championship/${championshipId}`, config);

  return promise;
}

const api = {
  login,
  signUp,
  logout,
  getChampoionshipAll,
  createChampionship,
  getChampoionshipUser,
  postTeams,
  deleteChampionship
}

export default api;