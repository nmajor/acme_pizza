class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def avatar_url
    gravatar_url
  end

  def gravatar_url
    hash = Digest::MD5.hexdigest(email.downcase);
    "https://s.gravatar.com/avatar/#{hash}?s=150"
  end
end
