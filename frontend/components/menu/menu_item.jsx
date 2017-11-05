import React from 'react';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: props.order,
    };

    this.updateOrder = this.updateOrder.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      order: nextProps.order
    });
  }

  updateOrder(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const { item } = this.props;
    const { order } = this.state;

    if( order.items[item.id] ) {
      order.items[item.id]++;
    } else {
      order.items[item.id] = 1;
    }

    this.setState({
      order
    });

    this.props.receiveOrder(order);
  }

  render() {
    const { item } = this.props;
    return(
      <div className="menu-item">
        <button onClick={this.updateOrder}>+1 Order</button>
        <div>{item.name}</div>
        <div>{item.price}</div>
      </div>
    );
  }
}

export default MenuItem;