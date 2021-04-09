class DropColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :required_vaccines, :vaccines_id
  end
end
