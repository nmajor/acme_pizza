class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  # for 404
  def not_found
    if request.format.symbol == :json
      render :json => { message: 'Not Found' }, status: 404
    else
      super
    end
  end

  # for 500
  rescue_from StandardError do |exception|
    render :json => { message: exception.message }, status: 500
   # Your exception handling code here 500
  end
end
