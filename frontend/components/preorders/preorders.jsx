import React from 'react';
import PreorderItem from './preorder_item';
import PreorderForm from './preorder_form';

class Preorders extends React.Component {
  render () {
    const {preorders, receivePreorders, receivePreorder, removePreorder} = this.props;

    const preorderItems = preorders.map(preorder => (
      <PreorderItem
        key={`preorder-${preorder.id}`}
        preorder={preorder}
        removePreorder={removePreorder}>
      </PreorderItem>
    ));

    return (
      <div>
        <ul>{preorderItems}</ul>
        <PreorderForm
          receivePreorder={receivePreorder}>
        </PreorderForm>
      </div>
    );
  }
}

export default Preorders;
