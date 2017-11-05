import React from 'react';
import OrderListContainer from './orders/order_list_container';
import NavBar from './orders/navbar';
import DisplayContainer from './orders/display_container';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <NavBar />
    <Switch>
      <Route path='/display' component={DisplayContainer}/>
      <Route component={OrderListContainer}/>
    </Switch>
  </div>
);

export default App;
