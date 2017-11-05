import { connect } from 'react-redux';
import MenuList from './menu_list';
import { requestMenu } from '../../actions/menu_actions';

const mapStateToProps = (state) => ({
  items: state.menu
});

const mapDispatchToProps = (dispatch) => ({
  requestMenu: () => dispatch(requestMenu())
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(MenuList);