import React from 'react';
import {getTimestamp} from '../../util/util';

class PreorderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      timestamp: "",
      order: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newPreorder = Object.assign({}, this.state, {timestamp: getTimestamp()});
    this.props.receivePreorder(newPreorder);
    this.setState({
      name: "",
      phone: "",
      timestamp: "",
      order: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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

        <button>Queue Up</button>
      </form>
    );
  }
}

export default PreorderForm;
