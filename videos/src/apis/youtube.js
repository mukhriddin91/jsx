import axios from "axios";

const KEY = "AIzaSyBvI3X5WObhusZE3Q3jCMPvZQZWXaR0d3Q";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        type: 'video',
        key: KEY
    }
});