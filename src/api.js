import axios from 'axios';

const API_URL = 'https://6069bc22e1c2a10017544db7.mockapi.io';
const api = axios.create({ baseURL: API_URL });

export default api;
