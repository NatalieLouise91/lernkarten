import axios from "axios";

const lernKartenAPI = axios.create({
    baseURL: "http://127.0.0.1:3000",
    responseType: 'json',
    withCredentials: true,
});

export default lernKartenAPI;
