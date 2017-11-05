import { connect } from 'react-redux';
import MenuLogin from './menu_login';
import { loginOrder } from '../../actions/current_order_actions';

const mapStateToProps = (state) => ({
// pass down dispatch from menu total container
});

const mapDispatchToProps = (dispatch) => ({
  loginOrder: (phone) => dispatch(loginOrder(phone)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuLogin);