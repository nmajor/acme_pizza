export function submitOrder(props, cb) {
  fetch(`/orders`, {
    credentials: 'include',
    method: 'post',
    body: JSON.stringify({ order: props }),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    return cb(data);
  })
  .catch((err) => {
    console.log(err);
  });
}

export function getOrders(cb) {
  fetch(`/orders`, {
    credentials: 'include',
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log('blah ', data);
    return cb(data);
  })
  .catch((err) => {
    console.log(err);
  });
}
