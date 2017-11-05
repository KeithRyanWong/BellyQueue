import React from 'react';

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="order-detail">
        <div className="detail-phone">
          <i className="fa fa-phone" aria-hidden="true"></i>
          &nbsp;
          {this.props.order.phone}
        </div>
        <div className="detail-order">
          {this.props.order.items}
        </div>
      </div>
    );
  }
}

export default OrderDetail;
