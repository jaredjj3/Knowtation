class CreateUserLoops < ActiveRecord::Migration
  def change
    create_table :user_loops do |t|
      t.integer :knowtation_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :user_loops, :knowtation_id
    add_index :user_loops, :user_id
  end
end
