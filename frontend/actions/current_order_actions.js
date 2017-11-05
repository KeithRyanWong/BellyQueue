
export const RECEIVE_ORDER = 'RECEIVE_ORDER';

export const receiveOrder = (phone) => {
  return {
    type: RECEIVE_ORDER,
    phone,
  };
};
