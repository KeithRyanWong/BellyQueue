import { connect } from 'react-redux';
import Menu from './menu';

const mapStateToProps = ({ currentOrder }) => ({
  phone: currentOrder.phone
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);