import React from 'react';
import MenuListContainer from './menu_list_container';
import MenuLoginContainer from './menu_login_container';


const Menu = () => (
  <div className="menu-container">
    <MenuListContainer />
    <div className="menu-side-panel">
      <MenuLoginContainer />
      <div className="menu-total">HERE DA TOTAL</div>
    </div>
  </div>
);


export default Menu;