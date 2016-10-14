# == Schema Information
#
# Table name: users
#
#  id                           :integer          not null, primary key
#  username                     :string           not null
#  user_type                    :string           default("student"), not null
#  password_digest              :string           not null
#  session_token                :string           not null
#  bio                          :text
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  profile_picture_file_name    :string
#  profile_picture_content_type :string
#  profile_picture_file_size    :integer
#  profile_picture_updated_at   :datetime
#

MISC2 = [
  "app/assets/images/misc/misc1.png",
  "app/assets/images/misc/misc2.png",
  "app/assets/images/misc/misc3.png",
  "app/assets/images/misc/misc4.png",
  "app/assets/images/misc/misc5.png",
  "app/assets/images/misc/misc6.png",
  "app/assets/images/misc/misc8.png",
  "app/assets/images/misc/misc9.png",
  "app/assets/images/misc/misc10.png",
  "app/assets/images/misc/misc11.png",
  "app/assets/images/misc/misc12.png",
  "app/assets/images/misc/misc13.png",
  "app/assets/images/misc/misc14.png"
]

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, uniqueness: { case_sensitive: false }
  validates :username, format: { with: /\A[\.a-zA-Z\d\_\-]+\z/, message: "can only have letters, numbers, periods, and underscores" }
  validates :password, length: { in: 6..20, allow_nil: true }
  validates :session_token, presence: true, uniqueness: true
  validates :username, length: { in: 3..26 }

  has_attached_file :profile_picture, default_url: MISC2.sample
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\z/

  after_initialize :ensure_session_token

  has_many :user_loops
  has_many :knowtations,
    class_name: 'Knowtation'

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
      next if days_ago > 6 # only want data from the past week
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
    application[:answer] == 'yes'
    # TODO
    # !application[:bio].empty? && !application[:link].empty?
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
