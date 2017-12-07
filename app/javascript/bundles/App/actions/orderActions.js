export function submitOrder(props, cb) {
  fetch(`${baseURL}/api/orders`, {
    credentials: 'include',
    method: 'post',
    body: JSON.stringify(props),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
  .then((res) => {
    cb(res);
  })
  .catch((err) => {
    console.log(err);
  });
}

export function getOrders(props, cb) {
  fetch(`${baseURL}/api/orders`, {
    credentials: 'include',
    method: 'get',
  })
  .then((res) => {
    cb(res);
  })
  .catch((err) => {
    console.log(err);
  });
}
