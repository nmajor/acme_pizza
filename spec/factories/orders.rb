FactoryBot.define do
  factory :order do
    association :customer
    association :pizza
    pickup_at ('2017-12-07T11:41:12.726Z').to_datetime
    status 'cooking'
  end

  factory :plain_order do
    pickup_at ('2017-12-07T11:41:12.726Z').to_datetime
    status 'cooking'
  end
end
