# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :vaccines

  def self.verify_vaccine(holder_id, verifer_id)
    holder_vaccines = Vaccination.user_vaccinations_id(holder_id)
    verifers_vaccines = RequiredVaccine.user_required_vaccine_ids(verifer_id)
    hasAllVaccines= (verifers_vaccines - holder_vaccines).length === 0
    {holder_vaccines:holder_vaccines, verifers_vaccines:verifers_vaccines, hasAllVaccines: hasAllVaccines}
  end
end
