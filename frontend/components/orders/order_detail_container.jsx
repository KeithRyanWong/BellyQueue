import {connect} from 'react-redux';
import orderDetail from './order_detail';
import {removeOrder} from '../../actions/order_actions';

const mapDispatchToProps = (dispatch, {order}) => ({
  removeorder: () => dispatch(removeOrder(order))
});

export default connect(null, mapDispatchToProps)(orderDetail);
