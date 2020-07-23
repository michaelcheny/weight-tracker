class SessionsController < ApplicationController
  def login
    user = User.find_by(email: params[:user][:email])
    if user && user.valid_password?(params[:user][:password])
      log_in(user)
      cookies['logged_in'] = logged_in?
      render json: user, status: 200
    else
      render json: { errors: ['Invalid credentials'] }, status: 401
    end
  end

  def auth_check
    cookies['logged_in'] = logged_in?
    render json: { csrf_auth_token: form_authenticity_token }
  end

  def auto_login
    # date = current_user.weight_histories.created_at.strftime("%m/%d/%Y")
    weight_hash = current_user.weight_histories.map do |his|
      thing = {weight: his.weight, date: his.created_at.strftime("%m/%d/%Y")}
      # binding.pry
    end
    # binding.pry
    if logged_in?
 
      render json: current_user, include: [:meals, :weight_histories => {only: [:weight, :created_at]}]
    else
      render json: { errors: "No users logged in" }
    end
  end

  def logout
    session.clear
    cookies['logged_in'] = logged_in?
    render json: { message: "Logged out" }, status: 200
  end

  private
# omniauth auth stuff

end
