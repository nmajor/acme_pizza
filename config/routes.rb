Rails.application.routes.draw do

  authenticated :user do
    root to: 'app#index'
    get 'orders/index'
    get 'orders/create'
  end
  root to: redirect('/users/sign_in')

  devise_for :users

end
