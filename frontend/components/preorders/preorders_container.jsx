import {connect} from 'react-redux';
import Preorders from './preorders';
import {allPreorders} from '../../reducers/selectors';
import {receivePreorders, receivePreorder, removePreorder} from '../../actions/preorders_actions';

const mapStateToProps = state => ({
  preorders: allPreorders(state)
});

const mapDispatchToProps = dispatch => ({
  receivePreorders: (preorders) => dispatch(receivePreorders(preorders)),
  receivePreorder: (preorder) => dispatch(receivePreorder(preorder)),
  removePreorder:(preorder) => dispatch(removePreorder(preorder))
});

export default connect(mapStateToProps, mapDispatchToProps)(Preorders);
