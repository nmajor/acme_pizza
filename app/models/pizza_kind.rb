class PizzaKind < ActiveRecord::Base
  has_many :pizzas

  def self.all_slim
    all.select("id").select("name")
  end
end
