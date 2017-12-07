class Pizza < ActiveRecord::Base
  SIZES = %w(small medium large)

  belongs_to :pizza_kind
  has_many :pizza_orders
  has_many :orders, through: :pizza_orders

  def kind
    pizza_kind.name
  end
end
