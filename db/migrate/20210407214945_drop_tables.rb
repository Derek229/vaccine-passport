class DropTables < ActiveRecord::Migration[6.1]
  def change
    drop_table :submissions
    drop_table :wallets
  end
end
