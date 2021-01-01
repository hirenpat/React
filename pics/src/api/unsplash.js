import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID e1zdOt4rONlUINcvnX4B_IDmlDMH0m4CT-KrTjdxmqs'
    }
});