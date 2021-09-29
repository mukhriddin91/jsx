import axios from "axios";

export default axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers: {
            Authorization: 'Client-ID b4M4iJhG1_gl2M7x07hfIipr0rQSQXvMWrbFF5n-IUA'
        }
    }
);