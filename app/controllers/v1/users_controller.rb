class V1::UsersController < ApplicationController

  def index

  end

  def show

  end

  def create 
    user = User.new(user_params)
    if user.save
      log_in(user)
      cookies['logged_in'] = true
      render json: user, status: 200
    else
      render json: { errors: user.errors.full_messages }, status: 400
    end
  end

  def update

  end

  def destroy

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
