# == Schema Information
#
# Table name: user_loops
#
#  id            :integer          not null, primary key
#  knowtation_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class UserLoop < ActiveRecord::Base

  validates :knowtation_id, :user_id, presence: true

  belongs_to :user
  belongs_to :knowtation
end
