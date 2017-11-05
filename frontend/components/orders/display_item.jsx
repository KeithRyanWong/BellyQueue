import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import OrderDetail from './order_detail';
import { withRouter } from 'react-router';
import { loginOrder } from '../../actions/current_order_actions';

class DisplayItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    };

    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeOrder(this.props.order);
  }

  handleUpdate(e) {
    e.preventDefault();
    const {order} = this.props;
    this.props.login(order.phone);
    this.props.history.push('/menu');
  }

  render() {
    let detail;
    if (this.state.detail) {
      detail = <OrderDetail order={this.props.order} menu={this.props.menu}/>;
    }

    const {order, removeOrder} = this.props;

    return (
      <li className="order-item-container">
        <div className="order-item-links">
          <div className="order-detail-button">
            {order.timestamp}
            &nbsp;
            {order.name}
            <button
              onClick={this.toggleDetail}>
              <i className="fa fa-chevron-down fa-lg" aria-hidden="true"></i>
            </button>
          </div>
          <div className="order-item-actions">
            <button onClick={this.handleUpdate}>
              <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
            </button>
            <button onClick={this.handleRemove}>
              <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        {detail}
      </li>
    );
  }
}


const mapStateToProps = (state) => ({
  
  });
  
  const mapDispatchToProps = (dispatch) => ({
    login: (number) => dispatch(loginOrder(number))
  });
  
  export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(DisplayItem));
  