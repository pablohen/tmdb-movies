import React, { ReactNode } from 'react';
import { MoviesProvider } from './movies';

interface Props {
  children: ReactNode;
}

const Contexts = ({ children }: Props) => {
  return <MoviesProvider>{children}</MoviesProvider>;
};

export default Contexts;
