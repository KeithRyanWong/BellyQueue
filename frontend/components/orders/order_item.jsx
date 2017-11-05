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

  handleUpdate(e) {
    e.preventDefault();
  }

  render() {
    let detail;
    if (this.state.detail) {
      detail = <OrderDetail order={this.props.order}/>;
    }

    const {order, removeOrder} = this.props;

    return (
      <li className="order-item-container">
        <div className="order-item-links">
          <div className="order-detail-button">
            {order.timestamp}
            &nbsp;
            {order.name}
            &nbsp;
            <button
              onClick={this.toggleDetail}>
              <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
            </button>
          </div>
          <div className="order-item-actions">
            <button onClick={this.handleUpdate}>
              <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
            </button>
            <button onClick={this.handleDelete}>
              <i className="fa fa-paper-plane fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        {detail}
      </li>
    );
  }
}

export default OrderItem;
