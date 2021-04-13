class VaccinationWallet < ApplicationRecord
  belongs_to :user
  has_many :vaccines, :through => :user

  def self.user_wallet(user)
#     SELECT wallets.id as wallet_id, wallets.user_id as wallet_user_id, users.id as user_id, vaccines.id as vaccine_id, first_name, last_name, vaccines.name as vacc_name, manufacturer
# FROM vaccination_wallets as wallets
# INNER JOIN users on wallets.user_id = users.id
# INNER JOIN vaccines on wallets.vaccine_id = vaccines.id
# WHERE users.id = 1
    select('wallets.id as wallet_id, wallets.user_id as wallet_user_id, users.id as user_id, first_name, last_name, vaccines.id as vaccine_id, vaccines.name as vaccine_name, vaccines.date as date, manufacturer')
    .from('vaccination_wallets as wallets')
    .joins('inner join users on wallets.user_id = users.id inner join vaccines on wallets.vaccine_id = vaccines.id')
    .where("users.id = #{user.id}")
  end

end
