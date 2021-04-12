class ChangeEffectivenessToBeIntegerInVaccines < ActiveRecord::Migration[6.1]
  def change
    change_column :vaccines, :effectiveness, :integer, using: 'effectiveness::integer'
  end 
end
