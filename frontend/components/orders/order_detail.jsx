import React from 'react';

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {order} = this.props;
    return (
      <div className="order-detail">
        <p>{order.phone}</p>
        <p>{order.order}</p>
      </div>
    );
  }
}

export default OrderDetail;
