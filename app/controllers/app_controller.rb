class AppController < ApplicationController
  layout "app"

  def index
    @app_props = { user: current_user }
  end
end
