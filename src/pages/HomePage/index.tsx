import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import MoviePreview from '../../components/MoviePreview';
import { useMovies } from '../../contexts/movies';
import ReactPaginate from 'react-paginate';
import { MovieDTO } from '../../interfaces/MovieDTO';
import Loading from '../../components/Loading';
import { Container, Content, Page } from './styles';
import FadeIn from 'react-fade-in';
import SearchBar from '../../components/SearchBar';

interface Props {}

const HomePage = (props: Props) => {
  const {
    isLoadingMovies,
    movies,
    searchTerm,
    setSearchTerm,
    searchTermRef,
    clearMovies,
  } = useMovies();
  const itemsPerPage = 5;

  const [currentItems, setCurrentItems] = useState<MovieDTO[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(movies.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(movies.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, movies]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  return (
    <Page>
      <Header title="Movies" />

      <Container>
        <Content>
          <SearchBar
            onSubmit={setSearchTerm}
            onClear={clearMovies}
            reference={searchTermRef}
          />

          {isLoadingMovies ? (
            <Loading />
          ) : (
            <FadeIn className="fadein">
              {currentItems.map((movie) => (
                <MoviePreview key={movie.id} movie={movie} />
              ))}
            </FadeIn>
          )}

          {!isLoadingMovies && !!movies.length ? (
            <div className="paginator">
              <ReactPaginate
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                marginPagesDisplayed={5}
              />
            </div>
          ) : (
            !isLoadingMovies &&
            !!searchTerm && (
              <p>Nenhum filme encontrado contendo '{searchTerm}'.</p>
            )
          )}
        </Content>
      </Container>
    </Page>
  );
};

export default HomePage;
