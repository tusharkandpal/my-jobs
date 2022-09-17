import axios from 'axios';
// Next we make an 'instance' of it
const instance = axios.create({
// .. where we make our configurations
    baseURL: 'https://jobs-api.squareboat.info/api/v1'
});

export default instance;