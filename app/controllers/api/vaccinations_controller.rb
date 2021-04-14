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



private


def set_vaccination
  @vaccination = Vaccination.find(params[:id])
end

def vaccination_params
  params.require(:vaccination).permit(:user_id, :vaccine_id)
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