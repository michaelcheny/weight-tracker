class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  before_action :set_csrf_cookie
  protect_from_forgery with: :exception

  def log_in(user)
    session[:user_id] = user.id
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def authorize_resource(resource)
    raise ActiveRecord::RecordInvalid if !current_user || resource.user != current_user
  end

  def authenticate
    raise AppError::AuthenticationError if !logged_in?
  end

  def not_authorized
    render json: {error: "Not Authorized"}, status: 401
  end

  # HELPERS

  def calculate_bmr(user)
    if user.gender == "male"
      bmr = (10 * (user.weight * 0.4535934)) + (6.25 * (user.height * 2.54)) - (5 * user.age) + 5
    elsif user.gender == "female"
      bmr = (10 * (user.weight * 0.4535934)) + (6.25 * (user.height * 2.54)) - (5 * user.age) - 161
    end
    return bmr.to_i
  end

  def calculate_tdee(user, bmr)
    if user.activity_level == 1
      multiplier = 1.2
    elsif user.activity_level == 2
      multiplier = 1.375
    elsif user.activity_level == 3
      multiplier = 1.55
    elsif user.activity_level == 4
      multiplier = 1.725
    elsif user.activity_level == 5
      multiplier = 1.95
    end
    tdee = bmr * multiplier
    return tdee.to_i
  end

  def calculate_macros(user, tdee)
    # 20% Fats | 40% Proteins | 40% Carbs 
    fats = (tdee * 0.2) / 9
    proteins = (tdee * 0.4) / 4
    carbs = (tdee * 0.4) / 4
    return MacroGoal.new(fats: fats, proteins: proteins, carbs: carbs)
  end

  private

  def set_csrf_cookie
    cookies['CSRF-TOKEN'] = form_authenticity_token
  end
end
