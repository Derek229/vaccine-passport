class Api::ExamplesController < ApplicationController
  def all_vaccinations
    render json:  Vaccination.all_vaccinations
  end

  def user_vaccinations
    render json: Vaccination.user_vaccinations(params[:id])
  end

  def all_vaccines 
    render json: Vaccine.all
  end

  def required_vaccines
    render json: RequiredVaccine.all_required_vaccines
  end

  def user_required_vaccine
    render json: RequiredVaccine.user_required_vaccine(params[:id])
  end

  def verify_user
     
     render json: User.verify_vaccine(params[:holder_id], params[:verifer_id])
  end

end
