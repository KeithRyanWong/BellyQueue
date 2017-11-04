import React from 'react';

class PreorderDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {preorder, removePreorder} = this.props;

    return (
      <div>
        <p>{preorder.order}</p>
        <button onClick={removePreorder}>Send to Kitchen</button>
      </div>
    );
  }
}

export default PreorderDetail;
