class VaccinationWallet < ApplicationRecord
  belongs_to :user
  has_many :vaccines, through :user
end
