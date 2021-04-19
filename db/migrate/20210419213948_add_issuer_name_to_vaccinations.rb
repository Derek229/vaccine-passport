class AddIssuerNameToVaccinations < ActiveRecord::Migration[6.1]
  def change
    add_column :vaccinations, :issuer_name, :string
  end
end
