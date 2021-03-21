//https://reactrouter.com/web/guides/quick-start
//https://react-query.tanstack.com/overview
import React from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

import { IntlProvider } from '#components/IntlProvider/index.jsx';
import { Header } from '#components/Header/index.jsx';
import { queryClient } from '#constants/queryClient.js';
import { Home } from '#layouts/Home/index.jsx';
import { Movies } from '#layouts/Movies/index.jsx';
import { Movie } from '#layouts/Movie/index.jsx';
import { ROUTES } from '#constants/routes.js';

import './styles.scss';

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <IntlProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home />
          </Route>
          <Route exact path={ROUTES.MOVIES}>
            <Movies />
          </Route>
          <Route exact path={ROUTES.MOVIE}>
            <Movie />
          </Route>
        </Switch>
      </BrowserRouter>
    </IntlProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
