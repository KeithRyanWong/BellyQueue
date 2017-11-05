export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';
export const SEND_ORDER = 'SEND_ORDER';

export const receiveOrders = (orders) => {
  return {
    type: RECEIVE_ORDERS,
    orders: orders
  };
};

export const receiveOrder = (order) => {
  return {
    type: RECEIVE_ORDER,
    order: order
  };
};

export const removeOrder = (order) => {
  return {
    type: REMOVE_ORDER,
    order: order
  };
};
