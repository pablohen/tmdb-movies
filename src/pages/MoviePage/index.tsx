import React, { useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { useParams } from 'react-router-dom';
import GenreButton from '../../components/GenreButton';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MovieTrailer from '../../components/MovieTrailer';
import { useMovies } from '../../contexts/movies';
import calcRuntime from '../../utils/calcRuntime';
import {
  Body,
  Container,
  Content,
  Details,
  Image,
  Page,
  Title,
} from './styles';

interface ParamsProps {
  movieId: string;
}

interface Props {}

const MoviePage = (props: Props) => {
  let { movieId } = useParams<ParamsProps>();

  const {
    isLoadingMovie,
    isLoadingTrailers,
    movie,
    trailers,
    setSelectedMovieId,
  } = useMovies();

  useEffect(() => {
    !!movieId && setSelectedMovieId(Number(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <Page>
      <Header title="Movies" />

      <Container>
        {isLoadingMovie && <Loading />}

        {!isLoadingMovie && !!movie.title && (
          <FadeIn>
            <Content>
              <Title>
                <h2>{movie.title}</h2>
                <span>{new Date(movie.release_date).toLocaleDateString()}</span>
              </Title>
              <Body>
                <Details>
                  {!!movie.overview && (
                    <>
                      <h3>Sinopse</h3>

                      <p>{movie.overview}</p>
                    </>
                  )}

                  <h3>Informações</h3>

                  <div className="info">
                    <div>
                      <h4>Situação</h4>
                      <p>{movie.status}</p>
                    </div>
                    <div>
                      <h4>Idioma</h4>
                      <p>{movie.original_language}</p>
                    </div>
                    <div>
                      <h4>Duração</h4>
                      <p>{calcRuntime(movie.runtime)}</p>
                    </div>
                    <div>
                      <h4>Orçamento</h4>
                      <p>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(movie.budget)}
                      </p>
                    </div>
                    <div>
                      <h4>Receita</h4>
                      <p>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(movie.revenue)}
                      </p>
                    </div>
                    <div>
                      <h4>Lucro</h4>
                      <p>
                        {new Intl.NumberFormat('pt-BR', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(movie.revenue - movie.budget)}
                      </p>
                    </div>
                  </div>

                  <div className="genres">
                    {movie.genres &&
                      movie.genres.map((genre) => (
                        <GenreButton key={genre.id} text={genre.name} />
                      ))}
                  </div>

                  <div className="rating">
                    <span>{movie.vote_average * 10}%</span>
                  </div>
                </Details>

                {!!movie.poster_path && (
                  <Image>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                      width="360px"
                      height="auto"
                    />
                  </Image>
                )}
              </Body>

              <div className="trailers">
                {!isLoadingTrailers &&
                  trailers.map((trailer) => {
                    if (trailer.site === 'YouTube') {
                      return (
                        <MovieTrailer
                          key={trailer.id}
                          youtubeVideoKey={trailer.key}
                        />
                      );
                    }
                    return null;
                  })}
              </div>
            </Content>
          </FadeIn>
        )}
      </Container>
    </Page>
  );
};

export default MoviePage;
