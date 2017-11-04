import {connect} from 'react-redux';
import PreorderDetail from './preorder_detail';
import {removePreorder} from '../../actions/preorders_actions';

const mapDispatchToProps = (dispatch, {preorder}) => ({
  removePreorder: () => dispatch(removePreorder(preorder))
});

export default connect(null, mapDispatchToProps)(PreorderDetail);
