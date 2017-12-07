Rails.application.routes.draw do

  authenticated :user do
    root to: 'app#index', as: :main_root
    resources :orders, only: [:index, :create]
  end
  root to: redirect('/users/sign_in')

  devise_scope :user do
      get '/sign_out', :to => "devise/sessions#destroy"
   end

  devise_for :users

end
