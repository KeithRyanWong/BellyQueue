import React from 'react';

class MenuLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneNumber: '',
    };

    this.login = this.login.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  login(e) {
    e.preventDefault();
    e.stopPropagation();

    if(!this.state.phoneNumber) {
      alert('Phone number not in queue!');
      return;
    } else {
      this.props.loginOrder(this.state.phoneNumber);
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
          <div>Please queue up at the front desk before signing in to pre-order</div>
          <div>Phone Number</div>
          <input name="phoneNumber" type="text" onChange={this.handleInput} placeholder="8881231234" value={phoneNumber}/>
        </div>
        <input type="submit" onClick={this.login} value="Show me the foodz!"/>
      </div>
    );
  }
}

export default MenuLogin;