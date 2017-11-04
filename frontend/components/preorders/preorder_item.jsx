import React from 'react';
import merge from 'lodash/merge';
import PreorderDetailContainer from './preorder_detail_container';

class PreorderItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: false
    };

    this.toggleDetail = this.toggleDetail.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  render() {
    let detail;
    if (this.state.detail) {
      detail = <PreorderDetailContainer preorder={this.props.preorder}/>;
    }

    const {preorder} = this.props;
    
    return (
      <li>
        <button onClick={this.toggleDetail}>
          {preorder.name}&nbsp;{preorder.phone}&nbsp;{preorder.timestamp}
        </button>
        {detail}
      </li>
    );
  }
}

export default PreorderItem;
