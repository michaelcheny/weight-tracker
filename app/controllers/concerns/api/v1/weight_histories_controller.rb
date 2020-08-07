class Api::V1::WeightHistoriesController < ApplicationController

  def create
    # binding.pry
    # user = User.find(params[:user_id])
    weight = WeightHistory.new(weight_params)
    # binding.pry
    if weight.save
      # user.weight_histories << weight
      # user.weight_histories.create(weight)
      # binding.pry
      render json: weight, status: 200
    else
      render json: {errors: ['Error logging']}, status: 401
    end
  end
  
  private

  def weight_params
    params.require(:weight_histories).permit(:user_id, :weight)
  end
end
