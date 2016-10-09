class AddAttachmentNotationImageToKnowtations < ActiveRecord::Migration
  def self.up
    change_table :knowtations do |t|
      t.attachment :notation_image
    end
  end

  def self.down
    remove_attachment :knowtations, :notation_image
  end
end
