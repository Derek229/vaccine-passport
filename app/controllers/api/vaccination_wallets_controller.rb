class Api::VaccinationWalletsController < ApplicationController
  before_action :authenticate_user!, only [:show, update]
  before_action :set_vaccination_wallet, only: [:update, :show, :delete]
  
  def index 
    vacccination_wallet = Vaccination_wallet.all
    render json: vacccination_wallet
  end

  def show 
    render json: {vaccination_wallet: @vacccination_wallet, user: @vacccination_wallet.get_user_with_vaccine}
  end

  def create 
    @vacccination_wallet = Vacccination_wallet.new(vaccination_wallet_params)
    if @vaccination_wallet.save
      render json: @vaccination_wallet
    else
      render json: {error: @vaccination_wallet}, status: 422
    end
  end
  
  def destoy 
    @vaccination_wallet.destoy
  end



private


def set_vaccination_wallet
  @vacccination_wallet = Vaccination_wallet.find(params[:id])
end

def vaccination_wallet_params
  params.premit(:user_id, :image, :date)




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