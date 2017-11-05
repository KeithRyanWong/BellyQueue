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
        <div className="order-list-container">
          <h3 className="order-time">Avg wait time is currently {orderItems.length * 5} min.</h3>
          <ul className="order-list">{orderItems}</ul>
        </div>
        <div className="order-form-container">
          <OrderForm
            receiveOrder={receiveOrder}>
          </OrderForm>
        </div>
      </div>
    );
  }
}

export default OrderList;
