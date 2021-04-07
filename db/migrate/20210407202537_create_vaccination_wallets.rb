class CreateVaccinationWallets < ActiveRecord::Migration[6.1]
  def change
    create_table :vaccination_wallets do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :image
      t.date :date

      t.timestamps
    end
  end
end
