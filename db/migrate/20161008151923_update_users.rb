class UpdateUsers < ActiveRecord::Migration
  def change
    remove_column :users, :country
  end
end
