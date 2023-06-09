import deafultAxios from 'axios';

const axios = () => deafultAxios.create({
    baseURL: 'https://proyecto-final-mogk.onrender.com',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export default axios;
