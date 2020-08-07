class Api::V1::WeightHistoriesController < ApplicationController

  def create
    weight = WeightHistory.new(weight_params)
    if weight.save
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
