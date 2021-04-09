class Api::VaccinesController < ApplicationController
  

  before_action :authenticate_user!, only: [:create,:update, :destroy]
  before_action :set_vaccine, only: [:show,:update, :destroy]
  
  def index
    vaccines = Vaccine.all
    render json: vaccines
  end

  def show  
    render json: {vaccine: @vaccine}
  end

  def create
    vaccine = @current_user.vaccines.new(vaccine_params)
    
    if vaccine.save
      render json: vaccine
    else 
      render json: {errors: vaccine.errors}, status: 422
    end
  end

  def update
    if @vaccine.update(vaccine_params)
      render json: @vaccine
    else 
      render json: {errors: vaccine.errors}, status: 422
    end 
  end
  
  def destroy
    @vaccine.destroy
  end

  

private 

def set_vaccine
  @vaccine = Vaccine.find(params[:id])
end

  def vaccine_params 
    params.permit(:name, :manufacturer, :image, :verified, :date, :user_id, :required_vaccine_id)
  end 
end


  # t.string "name"
  # t.string "manufacturer"
  # t.string "image"
  # t.string "verified"
  # t.date "date"
  # t.bigint "user_id", null: false