import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import NotFoundPage from '../pages/NotFoundPage';

interface Props {}

const AppRoutes = (props: Props) => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/:movieId" component={MoviePage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default AppRoutes;
