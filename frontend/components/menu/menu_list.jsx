import React from 'react';

class MenuList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestMenu();
  }

  render() {
    let { items } = this.props;

    return (
      <div className="menu-list">
        {items.map((item) => <MenuItem key={item.id} item={item}/>)}
      </div>
    );
  }
}