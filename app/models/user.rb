# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :vaccines

 

  def self.verify_vaccine(user_id, verifier_id)
    user_vaccines = Vaccination.user_vaccinations(user_id)
    verifiers_vaccines = RequiredVaccine.user_required_vaccines(verifier_id)
    hasAllVaccines= (verifiers_vaccines.length - user_vaccines.length) === 0
    {user_vaccines:user_vaccines, verifiers_vaccines:verifiers_vaccines, hasAllVaccines: hasAllVaccines}
  end

  def self.get_verifiers
    select('users.name, users.role, users.email, users.id')
    .from('users')
    .where('users.role LIKE ?', "%verifier%")
  end

  def self.get_users_user
    select('users.name, users.role, users.email, users.id')
    .from('users')
    .where('users.role LIKE ?', "%user%")
  end

  def self.site_stats
    total_users = User.get_users_user.length
    total_vaccines = Vaccine.all.length
    total_vaccinations = Vaccination.all.length
    {total_users:total_users, total_vaccines:total_vaccines, total_vaccinations:total_vaccinations}
  end
end