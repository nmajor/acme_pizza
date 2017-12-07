class Pizza < ActiveRecord::Base
  SIZES = %w(small medium large)

  belongs_to :pizza_kind
end
