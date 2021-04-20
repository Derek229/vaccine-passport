class Vaccination < ApplicationRecord
  belongs_to :user
  belongs_to :vaccine

  def self.all_vaccinations
    select('vx.id, u.id as user_id, u.name as user_name, v.name as vaccine_name, vx.image as vaccination_image, vx.issuer_name')
    .from('vaccinations vx')
    .joins("inner join users u on u.id = vx.user_id
     inner join vaccines v on v.id = vx.vaccine_id")

  end

  def self.user_vaccinations(user_id)
#     SELECT vaccinations.id as wallet_id, vaccinations.user_id as wallet_user_id, users.id as user_id, vaccines.id as vaccine_id, first_name, last_name, vaccines.name as vacc_name, manufacturer
# FROM vaccination_vaccinations as vaccinations
# INNER JOIN users on vaccinations.user_id = users.id
# INNER JOIN vaccines on vaccinations.vaccine_id = vaccines.id
# WHERE users.id = 1
    select('vaccinations.id , vaccinations.user_id as vaccination_user_id, users.id as user_id, first_name, last_name, vaccines.id as vaccine_id, vaccines.name as vaccine_name, vaccines.date as date, manufacturer, vaccinations.image, vaccinations.issuer_name')
    .from('vaccinations')
    .joins('inner join users on vaccinations.user_id = users.id 
    inner join vaccines on vaccinations.vaccine_id = vaccines.id')
    .where("users.id = #{user_id}")
  end

end
