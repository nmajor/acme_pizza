FactoryBot.define do
  factory :user do
    email Faker::Internet.email
    role 'cashier'
    password 'SuperHappy123'
  end

  factory :cashier, class: User do
    email Faker::Internet.email
    role 'cashier'
    password 'SuperHappy123'
  end

  factory :baker, class: User do
    email Faker::Internet.email
    role 'baker'
    password 'SuperHappy123'
  end

  factory :manager, class: User do
    email Faker::Internet.email
    role 'manager'
    password 'SuperHappy123'
  end
end
