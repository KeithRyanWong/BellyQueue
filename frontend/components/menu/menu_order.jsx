import React from 'react';

class MenuOrder extends React.Component {
  render() {
    const { order } = this.props;

    return (
      <div className="menu-order">
        <div>{this.props.order.name}</div>
      </div>
    );
  }
}

export default MenuOrder;