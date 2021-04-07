class RequiredVaccine < ApplicationRecord
  belongs_to :user
  has_many :vaccines
end
