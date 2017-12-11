class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def create
    @order = Order.new(order_params)
    render :status => 400 if !@order.save
  end

  private
    def order_params
      {
        customer_attributes: {
          name: params["order"]["name"],
          phone: params["order"]["phone"],
        },
        pizza_attributes: {
          size: params["order"]["size"],
          pizza_kind_id: params["order"]["pizza_kind_id"],
        },
        pickup_at: (params["order"]["pickup_at"] || '').to_datetime
      }
    end
end
