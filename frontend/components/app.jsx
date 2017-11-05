import React from 'react';
import OrderListContainer from './orders/order_list_container';
import Menu from './menu/menu';
import DisplayContainer from './orders/display_container';
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1 className="header">BellyQueue</h1>
    <Switch>
      <Route path="/menu" component={Menu}/>
      <Route path='/display' component={DisplayContainer}/>
      <Route component={OrderListContainer}/>
    </Switch>
  </div>
);

export default App;
