import React from 'react';
import PreordersContainer from './preorders/preorders_container';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>BellyQueue</h1>
    <Switch>
      <Route component={PreordersContainer}/>
    </Switch>
  </div>
);

export default App;
