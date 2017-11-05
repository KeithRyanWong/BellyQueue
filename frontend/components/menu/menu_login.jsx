import React from 'react';

class MenuLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
    };

    this.submitOrder = this.submitOrder.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  submitOrder(e) {
    e.preventDefault();
    e.stopPropagation();

    if(!this.state.phoneNumber) {
      alert('Please enter phone number to submit order');
      return;
    } else {
      // send order to backend

      this.setState({
        phoneNumber: ''
      });
    }
  }

  handleInput(e) {
    e.preventDefault();
    e.stopPropagation();

    let { phoneNumber } = this.state;
    phoneNumber = e.currentTarget.value;

    this.setState({
      phoneNumber 
    });
  }

  render() {
    const { phoneNumber } = this.state;

    return (
      <div className="menu-login">
        <div className="menu-form">
          <div>Phone Number</div>
          <input name="phoneNumber" type="text" onChange={this.handleInput} placeholder="+8881231234" value={phoneNumber}/>
        </div>
        <input type="submit" onClick={this.submitOrder} value="Submit Order"/>
      </div>
    );
  }
}

export default MenuLogin;