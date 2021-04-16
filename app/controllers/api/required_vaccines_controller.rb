class Api::RequiredVaccinesController < ApplicationController
  before_action :set_required_vaccines, only: [:create,  :update, :destoy]
  before_action :set_required_vaccines, only: [:show, :destoy, :update]
  

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
    required_vaccines = @current_user.required_vaccines.new(required_vaccines_params)
    
    if required_vaccines.save
      render json: required_vaccines
    else 
      render json: {errors: required_vaccines.errors}, status: 422
    end
  end
  
  def update
    if @required_vaccines.update(required_vaccines_params)
      render json: @required_vaccines
    else 
      render json: {errors: required_vaccines.errors}, status: 422
    end 
  end


  def destroy
  
  end
  


  private
    def set_required_vaccines
      @required_vaccines = RequiredVaccine.find(params[:id])
    end

    def required_vaccine_params 
      params.permit(:user_id)
    end
end 