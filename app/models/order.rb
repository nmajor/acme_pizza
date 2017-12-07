class Order < ActiveRecord::Base
  belongs_to :customer
  belongs_to :pizza

  accepts_nested_attributes_for :customer, :pizza
end
