class Wallet < ApplicationRecord
  belongs_to :user
  has_many :submissions, through: :users
end
