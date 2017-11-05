import { connect } from 'react-redux';
import MenuList from './menu_list';
// import { updateOrder } from '../../actions/menu_actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  // updateOrder: (item) => dispatch(updateOrder(item))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MenuList);