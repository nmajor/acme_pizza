PizzaKind.create(name: 'Cheeze')
PizzaKind.create(name: 'Pepperoni')
PizzaKind.create(name: 'Hawaiian')
PizzaKind.create(name: 'Veggie')

User.create(email: "manager@pizza.com", role: "manager", password: "SuperHappy123")
User.create(email: "cashier@pizza.com", role: "cashier", password: "SuperHappy123")
User.create(email: "baker@pizza.com", role: "baker", password: "SuperHappy123")

order1 = {
  customer_attributes: {
    name: "Harry Potter",
    phone: '555-555-5555',
  },
  pizza_attributes: {
    size: "small",
    pizza_kind_id: 2,
  },
  pickup_at: ('2017-12-07T11:41:12.726Z').to_datetime,
  status: 'cooking'
}
Order.create(order1)

order2 = {
  customer_attributes: {
    name: "Ron John",
    phone: '555-555-5535',
  },
  pizza_attributes: {
    size: "large",
    pizza_kind_id: 3,
  },
  pickup_at: ('2017-12-08T11:41:12.726Z').to_datetime,
  status: 'ready'
}
Order.create(order2)
