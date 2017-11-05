import {combineReducers} from 'redux';
import ordersReducer from './orders_reducer';
import menuReducer from './menu_reducer';
import currentOrderReducer from './current_order_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  orders: ordersReducer,
  menu: menuReducer,
  currentOrder: currentOrderReducer,
  user: userReducer,
});

export default rootReducer;
