import React from 'react';
import MenuItemContainer from './menu_item_container';

class MenuList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    // this.props.requestMenu();
  }



  render() {
    let { items } = this.props;
    items = items ? Object.keys(items).map((id) => <MenuItemContainer key={id} item={items[id]}/>) : '';
    // let items = this.mockItems();
    // items = items ? items.map((item) => <MenuItemContainer key={item.id} item={item}/>) : '';
    return (
      <div className="menu-list">
        {items}
      </div>
    );
  }
}

export default MenuList;