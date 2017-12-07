class Order < ActiveRecord::Base
  belongs_to :customer
  belongs_to :pizza

  accepts_nested_attributes_for :customer, :pizza

  before_save :default_values

  private
    def default_values
      self.status ||= 'new'
    end
end
