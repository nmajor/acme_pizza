json.extract! order, :id, :status, :pickup_at_clean, :pickup_at

json.customer do
  json.extract! order.customer, :name, :id, :phone
end

json.pizza do
  json.extract! order.pizza, :kind, :size
end
