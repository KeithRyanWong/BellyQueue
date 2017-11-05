import {combineReducers} from 'redux';
import ordersReducer from './orders_reducer';
import menuReducer from './menu_reducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
  menu: menuReducer,
});

export default rootReducer;
