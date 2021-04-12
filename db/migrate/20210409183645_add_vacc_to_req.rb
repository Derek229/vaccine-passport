class AddVaccToReq < ActiveRecord::Migration[6.1]
  def change
    add_reference :required_vaccines, :vaccine
  end
end
