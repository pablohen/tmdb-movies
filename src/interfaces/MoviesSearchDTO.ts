import { MovieDTO } from './MovieDTO';

export interface MoviesSearchDTO {
  page: number;
  results: MovieDTO[];
  total_results: number;
  total_pages: number;
}
