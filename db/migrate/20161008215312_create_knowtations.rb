class CreateKnowtations < ActiveRecord::Migration
  def change
    create_table :knowtations do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.text :scroll_instructions

      t.timestamps null: false
    end

    add_index :knowtations, :user_id
    add_index :knowtations, :scroll_instructions, unique: true
  end
end
