import React from 'react';

class OrderItemDetail extends React.Component {
  render() {
    return (
      <li className="item-detail">
        <div className="item-detail-name">{this.props.item}</div>
        <div className="item-detail-quantity">{this.props.quantity}</div>
      </li>
    );
  }
}

export default OrderItemDetail;
