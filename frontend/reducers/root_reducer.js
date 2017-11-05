import {combineReducers} from 'redux';
import ordersReducer from './orders_reducer';
import menuReducer from './menu_reducer';
import currentOrderReducer from './current_order_reducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
  menu: menuReducer,
  currentOrder: currentOrderReducer,
});

export default rootReducer;
