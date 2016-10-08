# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  user_type       :string           default("student"), not null
#  password_digest :string           not null
#  session_token   :string           not null
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
  validates :username, length: { in: 3..26 }

  after_initialize :ensure_session_token

  has_many :user_loops

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def total_given_loops
    user_loops.length
  end

  def method_name
    
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

  def completed_application?(application)
    !application[:bio].empty? && !application[:link].empty?
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def num_loops_on_date(date)
    # date is a date object
    # date's ===(other_date) method checks for equality
    # on a same 'day' basis
    count = 0
    user_loops.each do |user_loop|
      user_loop_date = Time.at(user_loop.created_at).to_date
      count += 1 if user_loop_date === date
    end
    count
  end

end
