import React from 'react';

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {order, removeOrder} = this.props;
    return (
      <div className="order-detail">
        <p>{order.phone}</p>
        <p>{order.order}</p>
        <button onClick={removeOrder}>Send to Kitchen</button>
      </div>
    );
  }
}

export default OrderDetail;
