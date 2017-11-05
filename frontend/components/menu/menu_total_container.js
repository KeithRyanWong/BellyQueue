import { connect } from 'react-redux';
import MenuTotal from './menu_total';
import { findOrder, parseItems } from '../../reducers/selectors';
import {receiveOrder} from '../../actions/order_actions';
import { logoutOrder } from '../../actions/current_order_actions';

const mapStateToProps = (state) => ({
  order: findOrder(state),
  items: parseItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  receiveOrder: (order) => dispatch(receiveOrder(order)),
  logoutOrder: () => dispatch(logoutOrder()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuTotal);