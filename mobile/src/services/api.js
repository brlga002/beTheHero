import axios from 'axios'

const api = axios.create({
    baseURL: 'https://crtrsp.herokuapp.com'
});

export default api;