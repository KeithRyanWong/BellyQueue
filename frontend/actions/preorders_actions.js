export const RECEIVE_PREORDERS = 'RECEIVE_PREORDERS';
export const RECEIVE_PREORDER = 'RECEIVE_PREORDER';
export const REMOVE_PREORDER = 'REMOVE_PREORDER';

export const receivePreorders = (preorders) => {
  return {
    type: RECEIVE_PREORDERS,
    preorders: preorders
  };
};

export const receivePreorder = (preorder) => {
  return {
    type: RECEIVE_PREORDER,
    preorder: preorder
  };
};

export const removePreorder = (preorder) => {
  return {
    type: REMOVE_PREORDER,
    preorder: preorder
  };
};
