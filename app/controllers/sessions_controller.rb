class SessionsController < ApplicationController
  def login
    binding.pry
    user = User.find_by(email: params[:user][:email])
    if user && user.valid_password?(params[:user][:password])
      log_in(user)
      cookies['logged_in'] = true
      binding.pry
      render json: user, status: 200
    else
      render json: { error: 'error' }, status: 401
    end
  end

  def auth_check
    cookies['logged_in'] = logged_in?
    render json: { csrf_auth_token: form_authenticity_token }
  end

  def auto_login
    # binding.pry
    if logged_in?
      # binding.pry
      render json: current_user
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
