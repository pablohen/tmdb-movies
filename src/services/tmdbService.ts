import axios from 'axios';

const tmdbService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_KEY,
    language: 'pt-BR',
  },
});

export default tmdbService;
