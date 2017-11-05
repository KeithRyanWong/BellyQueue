import { connect } from 'react-redux';
import MenuItem from './menu_item';
// import { updateOrder } from '../../actions/menu_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  // updateOrder: (item) => dispatch(updateOrder(item))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MenuItem);