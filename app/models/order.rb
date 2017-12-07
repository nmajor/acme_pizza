class Order < ActiveRecord::Base
  belongs_to :customer
  has_many :pizza_orders
  has_many :pizzas, through: :pizza_orders
end
