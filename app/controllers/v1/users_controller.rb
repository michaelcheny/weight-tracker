class Api::V1::UsersController < ApplicationController

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
    user = current_user
<<<<<<< HEAD:app/controllers/concerns/api/v1/users_controller.rb
    render json: user, include: [:meals, :weight_histories => {only: [:weight, :created_at]}], status: 200
=======
    render json: user, include: [:meals], status: 200
>>>>>>> parent of 77dd56f... add new resource for weight histories array for user to store their logs, correctly rendering it in json:app/controllers/v1/users_controller.rb
  end

  def create 
    user = User.new(user_params)
    if user.save
      log_in(user)
      cookies['logged_in'] = true
<<<<<<< HEAD:app/controllers/concerns/api/v1/users_controller.rb
      render json: user, include: [:meals, :weight_histories => {only: [:weight, :created_at]}], status: 200
=======
      render json: user, include: [:meals], status: 200
>>>>>>> parent of 77dd56f... add new resource for weight histories array for user to store their logs, correctly rendering it in json:app/controllers/v1/users_controller.rb
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
