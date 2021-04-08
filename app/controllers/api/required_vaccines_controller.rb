class Api::RequiredVaccinesController < ApplicationController
  before_action :set_required_vaccines, only: [:create,  :update, :destoy]
  before_action :set_required_vaccines, only: [show, :destoy, :update]
  

def index
    required_vaccine = Required_Vaccines.all
    render json: required_vaccines
  end

  def show
    render json: {required_vaccines: @required_vaccines}
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
      @required_vaccines = Required_vaccines.find(params[:id])
    end

    def required_vaccine_params 
      params.permit(:user_id)
    end
end 