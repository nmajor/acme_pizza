require 'spec_helper'

describe "Orders API" do
  it 'sends a list of orders' do
    FactoryBot.create_list(:order, 10)

    get '/orders', format: :json

    json = JSON.parse(response.body)

    # test for the 200 status-code
    expect(response).to be_success

    # check to make sure the right amount of orders are returned
    expect(json.length).to eq(10)
  end

  it 'can create and order' do
    order = FactoryBot.build(:order)

    params = {
      name: order.customer.name,
      phone: order.customer.phone,
      size: order.pizza.size,
      pizza_kind_id: order.pizza.pizza_kind_id,
      pickup_at: order.pickup_at,
    }

    post '/orders', order: params, format: :json
    json = JSON.parse(response.body)

    # test for the 200 status-code
    expect(response).to be_success

    # check to make sure the right amount of messages are returned
    expect(json["id"]).to be_a_kind_of(Numeric)
  end

  it 'won\'t allow orders with missing customer attribute: name' do
    order = FactoryBot.build(:order)

    params = {
      name: nil,
      phone: order.customer.phone,
      size: order.pizza.size,
      pizza_kind_id: order.pizza.pizza_kind_id,
      pickup_at: order.pickup_at,
    }

    post '/orders', order: params, format: :json
    json = JSON.parse(response.body)
    p json

    # test for the 200 status-code
    expect(response).not_to be_success

    # check to make sure the right amount of messages are returned
    expect(json["id"]).to be_nil
  end
end
