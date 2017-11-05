export const fetchWaitlist = () => {
  $.ajax({
    method: 'GET',
    url: 'api/order'
  });
};
