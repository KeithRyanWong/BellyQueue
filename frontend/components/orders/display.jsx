import React from 'react';
import DisplayItem from './display_item';

class Display extends React.Component {
  render () {
    const {orders, receiveOrders, receiveOrder, removeOrder} = this.props;

    const orderItems = orders.map(order => (
      <DisplayItem
        key={`order-${order.id}`}
        order={order}
        removeOrder={removeOrder}>
      </DisplayItem>
    ));

    return (
      <div className="order-container">
        <div className="order-list-container">
          <ul className="order-list">{orderItems}</ul>
        </div>
      </div>
    );
  }
}

export default Display;
