class DropColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :vaccines, :required_vaccine_id
  end
end
