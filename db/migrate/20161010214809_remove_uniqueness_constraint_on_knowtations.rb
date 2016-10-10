class RemoveUniquenessConstraintOnKnowtations < ActiveRecord::Migration
  def change
    remove_index :knowtations, :video_url
    remove_index :knowtations, :scroll_instructions
  end
end
