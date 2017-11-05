import { connect } from 'react-redux';
import MenuOrder from './menu_order';
import { findOrder } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
// pass down dispatch from menu total container
  order: findOrder(state)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuOrder);