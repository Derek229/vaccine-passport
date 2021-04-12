class AddEffectivenessToVaccines < ActiveRecord::Migration[6.1]
  def change
    add_column :vaccines, :effectiveness, :string
  end
end
