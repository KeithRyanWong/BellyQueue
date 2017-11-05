import React from 'react';
import OrderItem from './order_item';
import OrderForm from './order_form';

class OrderList extends React.Component {
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
        <ul className="order-list">{orderItems}</ul>
        <OrderForm
          receiveOrder={receiveOrder}>
        </OrderForm>
      </div>
    );
  }
}

export default OrderList;
