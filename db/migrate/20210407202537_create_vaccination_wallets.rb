class CreateVaccinationWallets < ActiveRecord::Migration[6.1]
  def change
    create_table :vaccinations do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :vaccine, null: false, foreign_key: true
      t.string :image
      t.date :date

      t.timestamps
    end
  end
end
