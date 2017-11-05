import React from 'react';
import merge from 'lodash/merge';

class DisplayItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    };

    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove(e) {
    e.preventDefault();
    this.props.removeOrder(this.props.order);
  }

  handleUpdate(e) {
    e.preventDefault();
  }

  render() {
    const {order, removeOrder} = this.props;

    return (
      <li className="order-item-container">
        <div className="order-item-links">
          <div className="order-detail-button">
            {order.timestamp}
            &nbsp;
            {order.name}
          </div>
          <div className="order-item-actions">
            <button onClick={this.handleUpdate}>
              <i className="fa fa-pencil fa-2x" aria-hidden="true"></i>
            </button>
            <button onClick={this.handleRemove}>
              <i className="fa fa-paper-plane fa-2x" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default DisplayItem;
