import { connect } from 'react-redux';
import MenuItem from './menu_item';
import { findOrder, parseItems } from '../../reducers/selectors';
import {receiveOrder} from '../../actions/order_actions';


const mapStateToProps = (state) => ({
  order: findOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  receiveOrder: (order) => dispatch(receiveOrder(order)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MenuItem);