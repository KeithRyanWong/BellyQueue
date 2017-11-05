export const allPreOrders = ({orders}) => (
  Object.keys(orders)
    .map(id => orders[id])
    .filter(order => order.ready === 'false')
    .sort((a, b) => a.timestamp > b.timestamp ? 1 : -1));

export const allOrders = ({orders}) => (
  Object.keys(orders)
    .map(id => orders[id])
    .filter(order => order.ready === 'true')
    .sort((a, b) => a.timestamp > b.timestamp ? 1 : -1));

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

export const parseOrder = (orderItems, menu) => {
  let parsed = {};
  Object.keys(orderItems).forEach(id => {
    parsed[menu.items[id - 52].name] = orderItems[id];
  });

  return parsed;
};
