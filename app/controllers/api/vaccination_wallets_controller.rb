class Api::VaccinationWalletsController < ApplicationController
  before_action :authenticate_user!, only: [:show, :update]
  before_action :set_vaccination_wallet, only: [:update, :show, :destroy]
  
  def index 
    vaccination_wallet = VaccinationWallet.all
    render json: vaccination_wallet
  end

  def show 
    render json: {vaccination_wallet: @vacccination_wallet}
  end

  def create 
    wallet = VaccinationWallet.new(vaccination_wallet_params)
    if wallet.save
      render json: wallet
    else
      render json: {error: wallet}, status: 422
    end
  end
  
  def destroy 
    @vaccination_wallet.destroy
  end



private


def set_vaccination_wallet
  @vaccination_wallet = Vaccination_wallet.find(params[:id])
end

def vaccination_wallet_params
  params.require(:vaccination_wallet).permit(:user_id, :vaccine_id)
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