import React from 'react';
import OrderItem from './order_item';

class Display extends React.Component {
  render () {
    const {orders, receiveOrders, receiveOrder, removeOrder} = this.props;

    const orderItems = orders.map(order => (
      <OrderItem
        key={`order-${order.id}`}
        order={order}
        removeOrder={removeOrder}>
      </OrderItem>
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
