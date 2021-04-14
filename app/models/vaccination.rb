class Vaccination < ApplicationRecord
  belongs_to :user
  belongs_to :vaccine

  def self.all_vaccinations
    select('vx.id, u.id as user_id, u.name as user_name, v.name as vaccine_name, vx.image as vaccination_image')
    .from('vaccinations vx')
    .joins("inner join users u on u.id = vx.user_id
     inner join vaccines v on v.id = vx.vaccine_id")
  end


  def self.user_vaccinations(id)
    select('vx.id, u.name as user_name, v.name as vaccine_name, vx.image as vaccination_image')
    .from('vaccinations vx')
    .joins("inner join users u on u.id = vx.user_id
     inner join vaccines v on v.id = vx.vaccine_id")
     .where('vx.user_id = ?', id)
  end

  def self.user_vaccinations_id(id)
    select('vx.vaccine_id')
    .from('vaccinations vx')
    .where('vx.user_id = ?', id)
  end


end
