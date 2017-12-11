module SeedHelper
  def seed_pizza_kinds
    PizzaKind.create(name: 'Cheeze')
    PizzaKind.create(name: 'Pepperoni')
    PizzaKind.create(name: 'Hawaiian')
    PizzaKind.create(name: 'Veggie')
  end

  module_function :seed_pizza_kinds
end
