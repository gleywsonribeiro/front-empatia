//API    /movie/now_playing?api_key=4604de514f83ba7b74322b0fa18c1cd6&language=pt-BR&page=1
// base: https://api.themoviedb.org/3

import axios from "axios";

const api = axios.create({
    //baseURL: 'https://api.themoviedb.org/3'
    baseURL: 'http://localhost:8080'
})

export default api;