export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

export const receiveorders = (orders) => {
  return {
    type: RECEIVE_ORDERS,
    orders: orders
  };
};

export const receiveorder = (order) => {
  return {
    type: RECEIVE_ORDER,
    order: order
  };
};

export const removeorder = (order) => {
  return {
    type: REMOVE_ORDER,
    order: order
  };
};
