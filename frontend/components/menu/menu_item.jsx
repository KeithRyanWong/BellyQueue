import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.updateOrder = this.updateOrder.bind(this);
  }

  updateOrder(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('updating order with: ', this.props.item.name);
  }

  render() {
    const { item } = this.props;
    return(
      <div className="menu-item">
        <button onClick={this.updateOrder}></button>
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
    );
  }
}