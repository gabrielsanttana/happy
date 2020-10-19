import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './containers/Landing';
import OrphanagesMap from './containers/OrphanagesMap';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/orfanatos" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
