json.extract! order, :id

json.customer do
  json.extract! order.customer, :name, :id, :phone
end

json.pizza do
  json.extract! order.pizza, :kind, :size
end
