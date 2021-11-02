import React, {
  createContext,
  ReactNode,
  useContext,
  useRef,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { MovieDetailsDTO } from '../interfaces/MovieDetailsDTO';
import { MovieDTO } from '../interfaces/MovieDTO';
import { MovieTrailerDTO } from '../interfaces/MovieTrailerDTO';
import tmdbService from '../services/tmdbService';

interface ContextData {
  isLoadingMovies: boolean;
  isLoadingMovie: boolean;
  isLoadingTrailers: boolean;
  movies: MovieDTO[];
  movie: MovieDetailsDTO;
  trailers: MovieTrailerDTO[];
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setSelectedMovieId: (movieId: number) => void;
  clearMovies: () => void;
  searchTermRef: any;
}

interface Props {
  children: ReactNode;
}

const MoviesContext = createContext({} as ContextData);

const MoviesProvider = ({ children }: Props) => {
  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [trailers, setTrailers] = useState<MovieTrailerDTO[]>([]);
  const [movie, setMovie] = useState({} as MovieDetailsDTO);
  const [selectedMovieId, setSelectedMovieId] = useState(0);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const searchTermRef = useRef(null);

  const clearMovies = () => {
    setMovies([]);
  };

  const fetchMovies = async (searchTerm: string) => {
    if (!!searchTerm) {
      const res = await tmdbService.get('/search/movie', {
        params: {
          query: searchTerm,
        },
      });
      const results: MovieDTO[] = res.data.results;

      return results;
    }

    return [];
  };

  const fetchMovie = async () => {
    if (selectedMovieId) {
      const { data } = await tmdbService.get<MovieDetailsDTO>(
        `/movie/${selectedMovieId}`
      );

      return data;
    }

    return {} as MovieDetailsDTO;
  };

  const fetchTrailers = async () => {
    if (selectedMovieId) {
      const res = await tmdbService.get(`/movie/${selectedMovieId}/videos`);
      const results: MovieTrailerDTO[] = res.data.results;

      return results;
    }

    return [] as MovieTrailerDTO[];
  };

  const { isLoading: isLoadingMovies } = useQuery(
    ['movies', searchTerm],
    () => fetchMovies(searchTerm),
    {
      onSuccess: (data) => setMovies(data),
      onError: () => toast.error('Não foi possível fazer essa busca.'),
    }
  );

  const { isLoading: isLoadingMovie } = useQuery(
    ['movie', selectedMovieId],
    fetchMovie,
    {
      onSuccess: (data) => setMovie(data),
      onError: () =>
        toast.error('Não foi possível carregar os dados desse filme.'),
    }
  );

  const { isLoading: isLoadingTrailers } = useQuery(
    ['trailers', movie],
    fetchTrailers,
    {
      onSuccess: (data) => setTrailers(data),
      onError: () => toast.error('Não foi possível carregar os trailers.'),
    }
  );

  return (
    <MoviesContext.Provider
      value={{
        isLoadingMovies,
        isLoadingMovie,
        isLoadingTrailers,
        movies,
        movie,
        trailers,
        searchTerm,
        setSearchTerm,
        setSelectedMovieId,
        clearMovies,
        searchTermRef,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

const useMovies = () => {
  const context = useContext(MoviesContext);

  return context;
};

export { MoviesProvider, useMovies };
