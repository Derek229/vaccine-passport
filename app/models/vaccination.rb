class Vaccination < ApplicationRecord
  belongs_to :user
  belongs_to :vaccine

  def self.all_vaccinations
    select('vaccinations.id, vaccinations.user_id as vaccination_user_id, users.id as user_id, first_name, last_name, email, vaccines.id as vaccine_id, vaccines.name as vaccine_name, vaccines.date as date, manufacturer, vaccinations.image, vaccinations.issuer_name')
    .from('vaccinations')
    .joins('inner join users on vaccinations.user_id = users.id 
    inner join vaccines on vaccinations.vaccine_id = vaccines.id')

  end

  def self.user_vaccinations(user_id)
    select('vaccinations.id, vaccinations.user_id as vaccination_user_id, users.id as user_id, first_name, last_name, vaccines.id as vaccine_id, vaccines.name as vaccine_name, vaccines.date as date, manufacturer, vaccinations.image, vaccinations.issuer_name')
    .from('vaccinations')
    .joins('inner join users on vaccinations.user_id = users.id 
    inner join vaccines on vaccinations.vaccine_id = vaccines.id')
    .where("users.id = #{user_id}")
  end

  def self.issuer_vaccinations(issuer_id)
    select('vaccinations.id, vaccinations.user_id as vaccination_user_id, users.id as user_id, first_name, last_name, email, vaccines.id as vaccine_id, vaccines.name as vaccine_name, vaccines.date as date, manufacturer, vaccinations.image, vaccinations.issuer_name, vaccinations.issuer_id')
    .from('vaccinations')
    .joins('inner join users on vaccinations.user_id = users.id 
    inner join vaccines on vaccinations.vaccine_id = vaccines.id')
    .where("vaccinations.issuer_id = #{issuer_id}")

  end

end
