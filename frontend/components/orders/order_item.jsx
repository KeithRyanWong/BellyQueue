import React from 'react';
import merge from 'lodash/merge';
import OrderDetail from './order_detail';

class OrderItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeOrder(this.props.order);
  }

  render() {
    let detail;
    if (this.state.detail) {
      detail = <OrderDetail order={this.props.order}/>;
    }

    const {order, removeOrder} = this.props;

    return (
      <li className="order-item">
        <div>
          <button
            className="order-detail-button"
            onClick={this.toggleDetail}>
            {order.name}
            {order.timestamp}
          </button>
          <button onClick={this.handleDelete}>Send to Kitchen</button>
        </div>
        {detail}
      </li>
    );
  }
}

export default OrderItem;
