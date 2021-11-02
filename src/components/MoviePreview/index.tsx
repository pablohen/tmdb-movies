import React from 'react';
import { MovieDTO } from '../../interfaces/MovieDTO';
import genres from '../../utils/moviesGenres';
import GenreButton from '../GenreButton';
import {
  Average,
  Body,
  Container,
  Content,
  Image,
  Overview,
  Title,
} from './styles';

interface Props {
  movie: MovieDTO;
}

const MoviePreview = ({ movie }: Props) => {
  const movieGenres = genres
    .map((genre) => {
      const movieGenre: string[] = [];

      movie.genre_ids.forEach((id) => {
        if (genre.id === id) {
          movieGenre.push(genre.name);
        }
      });

      return movieGenre;
    })
    .flat();

  return (
    <Container to={`/${movie.id}`}>
      <Body>
        {movie.poster_path && (
          <Image>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width="200px"
              height="auto"
            />
          </Image>
        )}

        <Content>
          <Title>{movie.title}</Title>

          <div className="teste">
            <Average>{movie.vote_average * 10}%</Average>
            <span className="releaseDate">
              {new Date(movie.release_date).toLocaleDateString()}
            </span>
          </div>

          <Overview>
            <p>{movie.overview}</p>

            <div className="genresList">
              {movieGenres.map((genre) => (
                <GenreButton text={String(genre)} />
              ))}
            </div>
          </Overview>
        </Content>
      </Body>
    </Container>
  );
};

export default MoviePreview;
