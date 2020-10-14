import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './containers/Landing';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
