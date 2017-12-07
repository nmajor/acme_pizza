class AppController < ApplicationController
  layout "app"

  def index
    @app_props = {
      user: {
        email: current_user.email,
        avatarUrl: current_user.avatar_url,
        role: current_user.role,
      },
      pizzaKindOptions: PizzaKind.all_slim,
      pizzaSizeOptions: Pizza::SIZES,
    }
  end
end
