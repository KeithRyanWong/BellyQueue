import React from 'react';
import {getTimestamp} from '../../util/util';

class OrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      timestamp: "",
      items: {},
      ready: "false"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newOrder = Object.assign({}, this.state, {timestamp: getTimestamp()});

    if (newOrder.name && newOrder.phone) {
      this.props.receiveOrder(newOrder);
    }

    this.setState({
      name: "",
      phone: "",
      timestamp: "",
      items: {},
      ready: "false"
    });
  }

  render() {
    return (
      <form
        className="order-form"
        onSubmit={this.handleSubmit}>
        <label>Name:
          <input
            value={this.state.name}
            onChange={this.update('name')}>
          </input>
        </label>
        <label>Phone:
          <input
            value={this.state.phone}
            onChange={this.update('phone')}>
          </input>
        </label>

        <button className="form-button">Queue Up</button>
      </form>
    );
  }
}

export default OrderForm;
