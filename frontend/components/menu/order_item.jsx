import React from 'react';

const OrderItem = ({ item, quantity, updateOrder }) => (
  <div className="order-item">
    <div className="order-badge">{quantity}</div>
    <button onClick={updateOrder(item.id)}>-</button>
    {item.name}
  </div>
);

export default OrderItem;