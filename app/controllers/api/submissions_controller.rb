class Api::SubmissionsController < ApplicationController

  def index
    render json: Submission.get_submission
  end

  def show
    render json: Submission.get_user(params[:id])
  end

end
