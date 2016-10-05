# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  user_type       :string           default("student"), not null
#  password_digest :string           not null
#  session_token   :string           not null
#  country         :string
#  bio             :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, uniqueness: { case_sensitive: false }
  validates :username, format: { with: /\A[\.a-zA-Z\d\_]+\z/, message: "can only have letters, numbers, periods, and underscores" }
  validates :password, length: { in: 6..20, allow_nil: true }
  validates :session_token, presence: true, uniqueness: true
  validates :username, length: { in: 3..20 }

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = User.generate_session_token
    end
  end


end
