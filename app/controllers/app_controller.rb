class AppController < ApplicationController
  layout "app"

  def index
    @app_props = { user: {
      email: current_user.email,
      avatar_url: current_user.avatar_url,
    } }
  end
end
