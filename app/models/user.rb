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

  # return format is [[days_ago, number_of_loops_that_given_day], []...]
  def mapped_given_loops
    date_loop_hash = {}
    todays_date = Time.now.to_date

    user_loops.each do |user_loop|
      created_at = user_loop.created_at
      date_created = Time.at(created_at).to_date
      days_ago = (todays_date - date_created).to_i
      date_loop_hash[days_ago] ||= 0
      date_loop_hash[days_ago] += 1
    end

    # pair[0] is the days_ago value
    return [[0, 0]] if date_loop_hash.empty?
    date_loop_hash.to_a.sort_by { |pair| pair[0] }
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
end
