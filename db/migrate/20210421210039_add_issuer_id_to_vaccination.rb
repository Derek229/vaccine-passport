class AddIssuerIdToVaccination < ActiveRecord::Migration[6.1]
  def change
    add_column :vaccinations, :issuer_id, :int
  end
end
