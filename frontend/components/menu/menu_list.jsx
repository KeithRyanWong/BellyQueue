import React from 'react';
import MenuItemContainer from './menu_item_container';

class MenuList extends React.Component {
  constructor(props) {
    super(props);

    this.mockItems = this.mockItems.bind(this);
  }

  componentDidMount() {
    // this.props.requestMenu();
  }



  render() {
    // let { items } = this.props;
    // items = items ? items.menu.map((item) => <MenuItemContainer key={item.id} item={item}/>) : '';
    let items = this.mockItems();
    items = items ? items.map((item) => <MenuItemContainer key={item.id} item={item}/>) : '';
    return (
      <div className="menu-list">
        {items}
      </div>
    );
  }


  mockItems() {
    return [{"id":52,"order_id":null,"name":"Bruschette with Tomato","quantity":null,"created_at":"2017-11-05T03:28:06.731Z","updated_at":"2017-11-05T03:28:06.731Z","price":12},{"id":53,"order_id":null,"name":"Caesar Salad","quantity":null,"created_at":"2017-11-05T03:28:06.739Z","updated_at":"2017-11-05T03:28:06.739Z","price":21},{"id":54,"order_id":null,"name":"Pasta Carbonara","quantity":null,"created_at":"2017-11-05T03:28:06.746Z","updated_at":"2017-11-05T03:28:06.746Z","price":21},{"id":55,"order_id":null,"name":"Ebiten maki","quantity":null,"created_at":"2017-11-05T03:28:06.750Z","updated_at":"2017-11-05T03:28:06.750Z","price":81},{"id":56,"order_id":null,"name":"Salmon nigiri","quantity":null,"created_at":"2017-11-05T03:28:06.754Z","updated_at":"2017-11-05T03:28:06.754Z","price":17},{"id":57,"order_id":null,"name":"Katsu Curry","quantity":null,"created_at":"2017-11-05T03:28:06.758Z","updated_at":"2017-11-05T03:28:06.758Z","price":90},{"id":58,"order_id":null,"name":"Caprese Salad","quantity":null,"created_at":"2017-11-05T03:28:06.762Z","updated_at":"2017-11-05T03:28:06.762Z","price":52},{"id":59,"order_id":null,"name":"Tiramisù","quantity":null,"created_at":"2017-11-05T03:28:06.767Z","updated_at":"2017-11-05T03:28:06.767Z","price":28},{"id":60,"order_id":null,"name":"Linguine with clams","quantity":null,"created_at":"2017-11-05T03:28:06.773Z","updated_at":"2017-11-05T03:28:06.773Z","price":45},{"id":61,"order_id":null,"name":"Scotch eggs","quantity":null,"created_at":"2017-11-05T03:28:06.777Z","updated_at":"2017-11-05T03:28:06.777Z","price":69},{"id":62,"order_id":null,"name":"Pork belly buns","quantity":null,"created_at":"2017-11-05T03:28:06.780Z","updated_at":"2017-11-05T03:28:06.780Z","price":89},{"id":63,"order_id":null,"name":"Chicken wings","quantity":null,"created_at":"2017-11-05T03:28:06.784Z","updated_at":"2017-11-05T03:28:06.784Z","price":98},{"id":64,"order_id":null,"name":"Cheeseburger","quantity":null,"created_at":"2017-11-05T03:28:06.789Z","updated_at":"2017-11-05T03:28:06.789Z","price":12},{"id":65,"order_id":null,"name":"Chicken milanese","quantity":null,"created_at":"2017-11-05T03:28:06.794Z","updated_at":"2017-11-05T03:28:06.794Z","price":39},{"id":66,"order_id":null,"name":"Souvlaki","quantity":null,"created_at":"2017-11-05T03:28:06.796Z","updated_at":"2017-11-05T03:28:06.796Z","price":78},{"id":67,"order_id":null,"name":"Ricotta stuffed Ravioli","quantity":null,"created_at":"2017-11-05T03:28:06.801Z","updated_at":"2017-11-05T03:28:06.801Z","price":11},{"id":68,"order_id":null,"name":"Risotto with seafood","quantity":null,"created_at":"2017-11-05T03:28:06.806Z","updated_at":"2017-11-05T03:28:06.806Z","price":97},{"id":69,"order_id":null,"name":"Tuna sashimi","quantity":null,"created_at":"2017-11-05T03:28:06.810Z","updated_at":"2017-11-05T03:28:06.810Z","price":74},{"id":70,"order_id":null,"name":"Barbecue Ribs","quantity":null,"created_at":"2017-11-05T03:28:06.815Z","updated_at":"2017-11-05T03:28:06.815Z","price":37},{"id":71,"order_id":null,"name":"Fish and chips","quantity":null,"created_at":"2017-11-05T03:28:06.821Z","updated_at":"2017-11-05T03:28:06.821Z","price":59},{"id":72,"order_id":null,"name":"Fettuccine Alfredo","quantity":null,"created_at":"2017-11-05T03:28:06.826Z","updated_at":"2017-11-05T03:28:06.826Z","price":13},{"id":73,"order_id":null,"name":"Teriyaki Chicken donburi","quantity":null,"created_at":"2017-11-05T03:28:06.831Z","updated_at":"2017-11-05T03:28:06.831Z","price":75},{"id":74,"order_id":null,"name":"French fries with sausages","quantity":null,"created_at":"2017-11-05T03:28:06.837Z","updated_at":"2017-11-05T03:28:06.837Z","price":79},{"id":75,"order_id":null,"name":"Chilli con carne","quantity":null,"created_at":"2017-11-05T03:28:06.842Z","updated_at":"2017-11-05T03:28:06.842Z","price":43},{"id":76,"order_id":null,"name":"Pappardelle alla Bolognese","quantity":null,"created_at":"2017-11-05T03:28:06.847Z","updated_at":"2017-11-05T03:28:06.847Z","price":34},{"id":77,"order_id":null,"name":"Vegetable Soup","quantity":null,"created_at":"2017-11-05T03:28:06.853Z","updated_at":"2017-11-05T03:28:06.853Z","price":18},{"id":78,"order_id":null,"name":"Philadelphia maki","quantity":null,"created_at":"2017-11-05T03:28:06.858Z","updated_at":"2017-11-05T03:28:06.858Z","price":98},{"id":79,"order_id":null,"name":"Mushroom Risotto","quantity":null,"created_at":"2017-11-05T03:28:06.866Z","updated_at":"2017-11-05T03:28:06.866Z","price":93},{"id":80,"order_id":null,"name":"Pork sausage roll","quantity":null,"created_at":"2017-11-05T03:28:06.871Z","updated_at":"2017-11-05T03:28:06.871Z","price":50},{"id":81,"order_id":null,"name":"Pasta with Tomato and Basil","quantity":null,"created_at":"2017-11-05T03:28:06.878Z","updated_at":"2017-11-05T03:28:06.878Z","price":42},{"id":82,"order_id":null,"name":"Meatballs with sauce","quantity":null,"created_at":"2017-11-05T03:28:06.883Z","updated_at":"2017-11-05T03:28:06.883Z","price":78},{"id":83,"order_id":null,"name":"California maki","quantity":null,"created_at":"2017-11-05T03:28:06.887Z","updated_at":"2017-11-05T03:28:06.887Z","price":65},{"id":84,"order_id":null,"name":"Pizza","quantity":null,"created_at":"2017-11-05T03:28:06.892Z","updated_at":"2017-11-05T03:28:06.892Z","price":68},{"id":85,"order_id":null,"name":"Chicken Fajitas","quantity":null,"created_at":"2017-11-05T03:28:06.896Z","updated_at":"2017-11-05T03:28:06.896Z","price":66},{"id":86,"order_id":null,"name":"Pasta and Beans","quantity":null,"created_at":"2017-11-05T03:28:06.901Z","updated_at":"2017-11-05T03:28:06.901Z","price":95},{"id":87,"order_id":null,"name":"Califlower penne","quantity":null,"created_at":"2017-11-05T03:28:06.906Z","updated_at":"2017-11-05T03:28:06.906Z","price":92},{"id":88,"order_id":null,"name":"Lasagne","quantity":null,"created_at":"2017-11-05T03:28:06.910Z","updated_at":"2017-11-05T03:28:06.910Z","price":98}];
  }
}

export default MenuList;