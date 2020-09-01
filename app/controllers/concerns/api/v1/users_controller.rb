class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
    user = User.find(params[:id])
    render json: user, status: 200
  end

  def create 
    user = User.new(user_params)
    user.macro = Macro.new(fats: 0, proteins: 0, carbs: 0)
    if user.save
      log_in(user)
      cookies['logged_in'] = true
      render json: user, status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 400
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      bmr = calculate_bmr(user)
      tdee = calculate_tdee(user, bmr)
      macros = calculate_macros(tdee)
      user.update(bmr: bmr, tdee: tdee, macro_goal: macros)
      render json: user, status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 400
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user, status: 200
  end

  private

  def user_params
    params.require(:user).permit(
      :email, 
      :password, 
      :password_confirmation, 
      :first_name, 
      :last_name, 
      :gender,
      :age,
      :height,
      :weight,
      :activity_level,
      :bmr,
      :tdee,
      :goal,
      :current_calories
    )
  end
  
end
