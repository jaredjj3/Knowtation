# == Schema Information
#
# Table name: knowtations
#
#  id                  :integer          not null, primary key
#  title               :string           not null
#  user_id             :integer          not null
#  scroll_instructions :text
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  video_url           :text
#

class Knowtation < ActiveRecord::Base
  validates :title, :user_id, :video_url, presence: true

  belongs_to :user
  has_many :user_loops

end
