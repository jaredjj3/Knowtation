class UpdateKnowtation < ActiveRecord::Migration
  def change
    add_column :knowtations, :video_url, :text
    add_index :knowtations, :video_url, unique: true
  end
end
