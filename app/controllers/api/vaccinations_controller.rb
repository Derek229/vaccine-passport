class Api::VaccinationsController < ApplicationController
  before_action :authenticate_user!, only: [:show, :update]
  before_action :set_vaccination, only: [:update, :show, :destroy]
  
  def all_vaccinations 
    vaccinations = Vaccination.all_vaccinations
    render json: vaccinations
  end

  def index 
    vaccinations = Vaccination.all_vaccinations
    render json: vaccinations
  end

  def user_vaccinations 
    vaccination = Vaccination.user_vaccinations(params[:user_id])
    render json: vaccination
  end

  def show 
    vaccination = Vaccination.user_vaccinations(params[:user_id])
    render json: vaccination
  end

  def create 
    vaccination = Vaccination.new(vaccination_params)
    if vaccination.save
      render json: vaccination
    else
      render json: {error: vaccination}, status: 422
    end
  end
  
  def destroy 
    @vaccination.destroy
  end

  def add_image

  end

  def update
    file = params[:file]
  
    if file
      begin
            
        # ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, secure: true, resource_type: :auto)
        @vaccination.image = cloud_image['secure_url']
        if @vaccination.save
          render json: @vaccination
        end
        # render json: { yo: "worked", file: file, cloud_image: cloud_image }
      rescue => e
        puts "file: #{file}, cloud_image: #{cloud_image}"
        render json: { errors: e }, status: 422
        return
      end
    end
  end
	# /api/users/:user_id/vaccinations/:id


  #   def vaccination_image_upload
  #   file = params[:file]
  
  #   if file
  #     begin
  #       # ext = File.extname(file.tempfile)
  #       cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
  #       vaccination = @vaccination.update(image:cloud_image['secure_url'])
  #       # render json: { yo: "worked", file: file, cloud_image: cloud_image }
  #     rescue => e
  #       render json: { errors: e }, status: 422
  #       return
  #     end
  #   end
  # end





private


def set_vaccination
  @vaccination = Vaccination.find(params[:id])
end

def vaccination_params
  params.require(:vaccination).permit(:user_id, :vaccine_id, :image)
end






  # create_table "vaccination_wallets", force: :cascade do |t|
  #   t.bigint "user_id", null: false
  #   t.string "image"
  #   t.date "date"
  #   t.datetime "created_at", precision: 6, null: false
  #   t.datetime "updated_at", precision: 6, null: false
  #   t.bigint "vaccine_id", null: false
  #   t.index ["user_id"], name: "index_vaccination_wallets_on_user_id"
  #   t.index ["vaccine_id"], name: "index_vaccination_wallets_on_vaccine_id"
  # end
end