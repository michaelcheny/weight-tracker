class V1::MealsController < ApplicationController
  # before_filter :authenticate_user!

  def index
    user = User.find(params[:user_id])
    meals = user.meals
    render json: meals, status: 200
  end

  def show
    meal = Meal.find(params[:id])
    render json: meal, status: 200
  end

  def create
    user = current_user
    meal = Meal.new(meal_params)
    if meal.save
      user.meals << meal
      render json: meal, status: 200
    else
      render json: { errors: meal.errors.full_messages }, status: 400
    end
  end

  def update

  end

  def destroy

  end

  private

  def meal_params
    params.require(:meals).permit(:name, :calories, :notes)
  end
end
