class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def create
    @order = Order.new(order_params)
    @order.save
  end

  private
    def order_params
      {
        customer_attributes: {
          name: params["name"],
          phone: params["phone"],
        },
        pizza_attributes: {
          size: params["size"],
          pizza_kind_id: params["kindId"],
        },
        pickup_at: (params["pickupAt"] || '').to_datetime
      }
    end
end
