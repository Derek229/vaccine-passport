class AddColumnToVaccine < ActiveRecord::Migration[6.1]
  def change
    add_reference :vaccines, :required_vaccine, null: false, foreign_key: true
  end
end
