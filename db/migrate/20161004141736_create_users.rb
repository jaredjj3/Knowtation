class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :user_type, default: 'student', null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :loops
      t.text :bio

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
