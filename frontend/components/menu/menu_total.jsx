import React from 'react';
import OrderItem from './order_item';

class MenuTotal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: props.order,
    };

    this.submitOrder = this.submitOrder.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.listOrder = this.listOrder.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      order: nextProps.order
    }); 
  }

  submitOrder() {

  }

  updateOrder(itemId) {
    return (e) => {
      e.preventDefault();
      let { order } = this.state;

      order.items[itemId]--;

      this.setState({
        order
      });

      this.props.receiveOrder(order);
    };
  }

  calculateTotal() {
    let { items } = this.props;
    let { order } = this.state;
    return this.filterItems()
      .reduce((total, item) => total + item.price * order.items[item.id], 0);
  }

  filterItems() {
    let { items } = this.props;
    let { order } = this.state;
    return Object.keys(order.items)
      .map((id) => items[id]);
  }

  listOrder() {
    let { items } = this.props;
    let { order } = this.state;
    return this.filterItems()
      .filter((item) => order.items[item.id] > 0)
      .map((item) => (
        <OrderItem key={item.id} item={item} quantity={order.items[item.id]} updateOrder={this.updateOrder}/>
      ));
  }

  render() {
    return (
      <div className="menu-total">
        {this.listOrder()}

        <div className="menu-total-display">
          <div>Total: ${this.calculateTotal()}</div>
          <input type="submit" onClick={this.submitOrder} value="Submit Order"/>
        </div>
      </div>
    );
  }
}

export default MenuTotal;