import React from 'react';
import OrderListContainer from './orders/order_list_container';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>BellyQueue</h1>
    <Switch>
      <Route component={OrderListContainer}/>
    </Switch>
  </div>
);

export default App;
