class RequiredVaccine < ApplicationRecord
  belongs_to :user
  belongs_to :vaccines
end
