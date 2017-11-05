import { connect } from 'react-redux';
import MenuList from './menu_list';
import { requestMenu } from '../../actions/menu_actions';
import { findOrder, parseItems } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  items: parseItems(state) || {},
});

const mapDispatchToProps = (dispatch) => ({
  requestMenu: () => dispatch(requestMenu())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MenuList);