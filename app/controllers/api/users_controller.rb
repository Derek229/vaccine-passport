class Api::UsersController < ApplicationController

  before_action :set_user, only: [:update, :destroy]

  def index
    render json: User.get_users_user
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
		file = params[:file]
  
    if file
      begin
        cloud_image = Cloudinary::Uploader.upload(file, secure: true, resource_type: :auto)
        @user.image = cloud_image['secure_url']
        if @user.save
          render json: @user
        end
      rescue => e
        puts "file: #{file}, cloud_image: #{cloud_image}"
        render json: { errors: e }, status: 422
				puts e
        return
      end
		end
		if !file
    if @user.update(user_params)
      render json: @user
    else 
      render json: {errors: @user.errors}, status: 422
    end 
	end
  end

  def verifiers
    render json: User.get_verifiers
  end

  def site_stats
    render json: User.site_stats
  end

  private 

  def set_user
    @user = User.find(params[:id])
  end
  
    def user_params 
      params.permit(:name, :email, :image, :first_name, :last_name)
    end 
  end
