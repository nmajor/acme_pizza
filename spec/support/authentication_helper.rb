module AuthenticationHelper
  def sign_in_as_cashier
      @user ||= FactoryBot.create(:user)
      post "/auth/sign_in", params: {:email => @user.email, :password => @user.password}, headers: {'HTTP_ACCEPT' => "application/json"}
      # set_cookie "authentication_token=#{@user.authentication_token}"
    end
end

RSpec.configure do |config|
  config.include AuthenticationHelper
end
