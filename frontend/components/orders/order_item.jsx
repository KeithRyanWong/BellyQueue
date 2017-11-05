import React from 'react';
import merge from 'lodash/merge';
import OrderDetailContainer from './order_detail_container';

class OrderItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    };

    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  render() {
    let detail;
    if (this.state.detail) {
      detail = <OrderDetailContainer order={this.props.order}/>;
    }

    const {order} = this.props;

    return (
      <li className="order-item">
        <button
          className="order-detail-button"
          onClick={this.toggleDetail}>
          {order.name}
          {order.timestamp}
        </button>
        {detail}
      </li>
    );
  }
}

export default OrderItem;
