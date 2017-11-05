import React from 'react';
import MenuListContainer from './menu_list_container';
import MenuOrderContainer from './menu_order_container';
import MenuLoginContainer from './menu_login_container';
import MenuTotalContainer from './menu_total_container';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   order: this.props.order || '',
    // };

    // this.login = this.login.bind(this);
    // this.logout = this.logout.bind(this);
  }

  // login(order) {
  //   this.setState({
  //     order 
  //   });
  // }

  // logout() {
  //   this.setState({
  //     order: ''
  //   });
  // }

  render() {
    return this.props.phone ? (
      <div className="menu-container">
        <MenuListContainer />
        <div className="menu-side-panel">
          <MenuOrderContainer />
          <MenuTotalContainer />
        </div>
      </div>
    ) : (
      <MenuLoginContainer />
    );
  }
}

export default Menu;