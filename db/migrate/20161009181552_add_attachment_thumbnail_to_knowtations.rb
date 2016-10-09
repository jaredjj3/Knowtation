class AddAttachmentThumbnailToKnowtations < ActiveRecord::Migration
  def self.up
    change_table :knowtations do |t|
      t.attachment :thumbnail
    end
  end

  def self.down
    remove_attachment :knowtations, :thumbnail
  end
end
