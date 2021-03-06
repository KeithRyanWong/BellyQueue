import React from 'react';
import { connect } from 'react-redux';
import merge from 'lodash/merge';
import OrderDetail from './order_detail';
import { withRouter } from 'react-router';
import { loginOrder } from '../../actions/current_order_actions';

class OrderItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    };

    this.handleSend = this.handleSend.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  handleSend(e) {
    e.preventDefault();
    const sendOrder = Object.assign({}, this.props.order, {'ready': 'true'});
    this.props.receiveOrder(sendOrder);
  }

  handleUpdate(e) {
    e.preventDefault();
    const {order} = this.props;
    this.props.login(order.phone);
    this.props.history.push('/menu');
  }

  render() {
    const {order, menu, removeOrder} = this.props;

    let detail;
    if (this.state.detail) {
      detail = <OrderDetail order={order} menu={menu}/>;
    }

    return (
      <li className="order-item-container">
        {this.renderItem()}
        {detail}
      </li>
    );
  }

  renderItem() {
    const {order, menu, removeOrder} = this.props;
    return this.props.user == 'customer' ? 
      (<div className="order-item-links">
        <div className="order-detail-button">
          {order.timestamp}
          &nbsp;
          {order.name}
          &nbsp;
        </div>
      </div>) :
      (<div className="order-item-links">
        <div className="order-detail-button">
          {order.timestamp}
          &nbsp;
          {order.name}
          &nbsp;
          <button
            onClick={this.toggleDetail}>
            <i className="fa fa-chevron-down fa-lg" aria-hidden="true"></i>
          </button>
        </div>
        <div className="order-item-actions">
          <button onClick={this.handleUpdate}>
            <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
          </button>
          <button onClick={this.handleSend}>
            <i className="fa fa-paper-plane fa-2x" aria-hidden="true"></i>
          </button>
        </div>
      </div>);
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
)(OrderItem));
