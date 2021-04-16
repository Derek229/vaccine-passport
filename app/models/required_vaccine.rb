class RequiredVaccine < ApplicationRecord
  belongs_to :user
  belongs_to :vaccine
  
  def self.all_required_vaccines
    select('u.id as user_id, u.name as user_name, v.name as vaccine_name')
    .from('required_vaccines rv')
    .joins("inner join users u on u.id = rv.user_id  
      inner join vaccines v on v.id = rv.vaccine_id")
  end

  def self.user_required_vaccines(id)
    select('u.id as user_id, u.name as user_name, v.name as vaccine_name')
    .from('required_vaccines rv')
    .joins("inner join users u on u.id = rv.user_id  
      inner join vaccines v on v.id = rv.vaccine_id")
    .where('rv.user_id = ?', id)
  end

  def self.user_required_vaccine_ids(id)
    select('rv.vaccine_id')
    .from('required_vaccines rv')
    .where('rv.user_id = ?', id)
  end
end