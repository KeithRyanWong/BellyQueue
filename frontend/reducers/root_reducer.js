import {combineReducers} from 'redux';
import preordersReducer from './preorders_reducer';

const rootReducer = combineReducers({
  preorders: preordersReducer
});

export default rootReducer;
