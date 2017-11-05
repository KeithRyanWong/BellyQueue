import {connect} from 'react-redux';
import OrderList from './order_list';
import {allPreOrders} from '../../reducers/selectors';
import {receiveOrders, receiveOrder} from '../../actions/order_actions';

const mapStateToProps = state => ({
  orders: allPreOrders(state)
});

const mapDispatchToProps = dispatch => ({
  receiveOrders: (orders) => dispatch(receiveOrders(orders)),
  receiveOrder: (order) => dispatch(receiveOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);
