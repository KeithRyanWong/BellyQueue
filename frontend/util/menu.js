export const fetchMenu = () => (
  fetch('http://localhost:3000/api/items')
    .then(resp => resp.json())
);