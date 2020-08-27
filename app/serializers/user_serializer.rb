class UserSerializer < ActiveModel::Serializer
  attributes :id, :activity_level, :email, :first_name, :last_name, :weight, :age, :height, :gender, :bmr, :tdee, :activity_level, :goal, :current_calories
  
  has_one :macro
  has_one :macro_goal
  has_many :meals
  has_many :weight_histories
end
