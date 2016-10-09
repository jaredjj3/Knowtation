# == Schema Information
#
# Table name: knowtations
#
#  id                          :integer          not null, primary key
#  title                       :string           not null
#  user_id                     :integer          not null
#  scroll_instructions         :text
#  created_at                  :datetime         not null
#  updated_at                  :datetime         not null
#  video_url                   :text
#  notation_image_file_name    :string
#  notation_image_content_type :string
#  notation_image_file_size    :integer
#  notation_image_updated_at   :datetime
#  thumbnail_file_name         :string
#  thumbnail_content_type      :string
#  thumbnail_file_size         :integer
#  thumbnail_updated_at        :datetime
#

class Knowtation < ActiveRecord::Base
  validates :title, :user_id, :video_url, presence: true

  belongs_to :user
  has_many :user_loops

  has_attached_file :notation_image, default_url: "default.jpg"
  validates_attachment_content_type :notation_image, content_type: /\Aimage\/.*\z/

  has_attached_file :thumbnail, default_url: "default.jpg"
  validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/

  def received_loops
    self.user_loops.length
  end
end
