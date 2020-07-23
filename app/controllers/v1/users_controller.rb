class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
    user = current_user
    render json: user, include: [:meals], status: 200
  end

  def create 
    user = User.new(user_params)
    if user.save
      log_in(user)
      cookies['logged_in'] = true
      render json: user, include: [:meals], status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 400
    end
  end

  def update
    user = current_user
    if user.update(user_params)
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
      :goal
    )
  end
  
end
