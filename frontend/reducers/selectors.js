export const allPreOrders = ({orders}) => Object.keys(orders).map(id => orders[id]).filter(order => order.ready === 'false');
export const allOrders = ({orders}) => Object.keys(orders).map(id => orders[id]).filter(order => order.ready === 'true');


export const findOrder = ({ orders, currentOrder }) => (
  Object.keys(orders).map((id) => orders[id])
    .filter((order) => order.phone === currentOrder.phone)[0] || {}
);

export const parseItems = ({menu}) => {
  let items = {};
  menu.items.forEach((item) => { 
    items[item.id] = item; 
  });
  return items;
};