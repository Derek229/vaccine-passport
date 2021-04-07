class AddColumnToVaccinationWallet < ActiveRecord::Migration[6.1]
  def change
    add_reference :vaccination_wallets, :vaccine, null: false, foreign_key: true
  end
end
