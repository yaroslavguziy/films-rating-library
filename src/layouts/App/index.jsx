import React from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

import { IntlProvider } from '#components/IntlProvider/index.jsx';
import { Header } from '#components/Header/index.jsx';

import { queryClient } from '#constants/queryClient.js';
import { Home } from '#layouts/Home/index.jsx';
import { Entities } from '#layouts/Entities/index.jsx';
import { Entity } from '#layouts/Entity/index.jsx';
import { ROUTES } from '#constants/routes.js';

import './styles.scss';

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <IntlProvider>
      <BrowserRouter>
        <Header />
        <main className="content">
          <div className="container">
            <Switch>
              <Route exact path={ROUTES.HOME}>
                <Home />
              </Route>
              <Route exact path={ROUTES.ENTITIES}>
                <Entities />
              </Route>
              <Route exact path={ROUTES.ENTITY}>
                <Entity />
              </Route>
            </Switch>
          </div>
        </main>
      </BrowserRouter>
    </IntlProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
