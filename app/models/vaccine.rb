class Vaccine < ApplicationRecord
  belongs_to :user
  has_many :vaccinations, :dependent => :delete_all

end
