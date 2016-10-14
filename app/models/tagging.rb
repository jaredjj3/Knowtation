# == Schema Information
#
# Table name: taggings
#
#  id            :integer          not null, primary key
#  knowtation_id :integer          not null
#  tag_id        :integer          not null
#  created_at    :datetime
#  updated_at    :datetime
#

class Tagging < ActiveRecord::Base
  belongs_to :knowtation
  belongs_to :tag

  validates :knowtation, :tag, presence: true
  validates :tag_id, uniqueness: { scope: :knowtation_id }
end
