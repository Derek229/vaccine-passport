class Api::UsersController < ApplicationController

  before_action :set_user, only: [:update, :destroy]

  def index
    render json: User.all
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    if @user.update(user_params)
      render json: @user
    else 
      render json: {errors: @user.errors}, status: 422
    end 
  end

  def verifiers
    render json: User.get_verifiers
  end

  private 

  def set_user
    @user = User.find(params[:id])
  end
  
    def user_params 
      params.permit(:name, :email, :image, :first_name, :last_name)
    end 
  end
