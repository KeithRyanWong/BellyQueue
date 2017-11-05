import React from 'react';
import {Link} from 'react-router-dom';
import DisplayContainer from './display_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(property) {
    const links = document.querySelectorAll('.link');
    links.forEach (link => link.classList.remove('selected'));

    const selectedlink = document.querySelector(`.${property}`);
    // link.classList.add('selected');
  }


  render() {
    let menuLink = this.props.user === "merchant" ? '' : 
      (<Link
        to='/menu'
        className="link display"
        onClick={this.handleSelect('menu')}>
        Menu
      </Link>);

    let displayLink = this.props.user === "customer" ? '' :
      (<Link
        to='/display'
        className="link display"
        onClick={this.handleSelect('display')}>
        Orders
      </Link>);

    return(
      <nav className="navbar">
        <h1 className="header">BellyQueue</h1>
        <Link
          to='/'
          className="link waitlist"
          onClick={this.handleSelect('waitlist')}>
          Waitlist
        </Link>
        {displayLink}
        {menuLink}
      </nav>
    );
  }
}

export default NavBar;
