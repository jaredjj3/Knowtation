# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime
#  updated_at :datetime
#

class Tag < ActiveRecord::Base
  has_many :taggings, dependent: :destroy
  has_many :knowtations, through: :taggings

  validates :name, presence: true
  validates :name, uniqueness: true
end
