class Api::RequiredVaccinesController < ApplicationController
  before_action :set_required_vaccines, only: [:create,  :update, :destroy]
  before_action :set_required_vaccines, only: [:show, :destroy, :update]
  

def index
    required_vaccines = RequiredVaccine.all
    render json: required_vaccines
  end

  def show
    render json: {required_vaccines: @required_vaccines}
  end

  def  required_vaccines
    render json: RequiredVaccine.all_required_vaccines
  end

  def user_required_vaccine
    render json: RequiredVaccine.user_required_vaccine(params[:id])
  end 

  def verify_user
    render json: User.verify_vaccine(params[:user_id], params[:verifer_id])
  end

  

  def create
    required_vaccines = RequiredVaccine.new(required_vaccine_params)
    
    if required_vaccines.save
      render json: required_vaccines
    else 
      render json: {errors: required_vaccines.errors}, status: 422
    end
  end


  def destroy
    @required_vaccines.destroy
  end
  
  def verifiers_required_vaccines
    render json: RequiredVaccine.user_required_vaccines(params[:user_id])
  end

  private
    def set_required_vaccines
      @required_vaccines = RequiredVaccine.find(params[:id])
    end

    def required_vaccine_params 
      params.permit(:user_id, :vaccine_id)
    end
end 