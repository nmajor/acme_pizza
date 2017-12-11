class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable

  def avatar_url
    gravatar_url
  end

  def gravatar_url
    hash = Digest::MD5.hexdigest(email.downcase);
    "https://s.gravatar.com/avatar/#{hash}?s=150"
  end
end
