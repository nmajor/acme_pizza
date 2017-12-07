class Customer < ActiveRecord::Base

  def phone=(new_phone)
    @phone = new_phone.gsub(/[^0-9]/, '')
  end
end
