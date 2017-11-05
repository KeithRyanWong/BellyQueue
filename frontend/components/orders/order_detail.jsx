import React from 'react';
import {parseOrder} from '../../reducers/selectors';
import OrderItemDetail from './order_item_detail';

class OrderDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const parsed = parseOrder(this.props.order.items, this.props.menu);

    const items =
      Object.keys(parsed)
        .map(item => (
          <OrderItemDetail
            key={item}
            item={item}
            quantity={parsed[item]}>
          </OrderItemDetail>
        )
      );

    return (
      <div className="order-detail">
        <div className="detail-phone">
          <i className="fa fa-phone" aria-hidden="true"></i>
          &nbsp;
          {this.props.order.phone}
        </div>
        <div className="detail-order">
          <ul className="item-detail-container">{items}</ul>
        </div>
      </div>
    );
  }
}

export default OrderDetail;
