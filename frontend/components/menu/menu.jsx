import React from 'react';
import MenuListContainer from './menu_list_container';


const Menu = () => (
  <div className="menu-container">
    <MenuListContainer />
    <div className="menu-side-panel">
      <div className="menu-login">HERE'S THE LOGIN</div>
      <div className="menu-total">HERE DA TOTAL</div>
    </div>
  </div>
);


export default Menu;