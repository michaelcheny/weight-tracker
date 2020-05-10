class V1::MealsController < ApplicationController
  before_filter :authenticate_user!

  def index
    user = current_user
    meals = user.meals
    render json: meals, status: 200
  end

  def show
    meal = Meal.find(params[:id])
    render json: meal, status: 200
  end

  def create

  end

  def update

  end

  def destroy

  end
end
