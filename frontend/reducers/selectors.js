export const allPreOrders = ({orders}) => Object.keys(orders).map(id => orders[id]).filter(order => order.ready === 'false');
export const allOrders = ({orders}) => Object.keys(orders).map(id => orders[id]).filter(order => order.ready === 'true');
