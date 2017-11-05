import {connect} from 'react-redux';
import OrderList from './order_list';
import {allOrders} from '../../reducers/selectors';
import {receiveOrders, receiveOrder, removeOrder} from '../../actions/order_actions';

const mapStateToProps = state => ({
  orders: allOrders(state)
});

const mapDispatchToProps = dispatch => ({
  receiveOrders: (orders) => dispatch(receiveOrders(orders)),
  receiveOrder: (order) => dispatch(receiveOrder(order)),
  removeOrder:(order) => dispatch(removeOrder(order))
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
