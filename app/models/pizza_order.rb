class PizzaOrder < ActiveRecord::Base
  belongs_to :pizza
  belongs_to :order
end
