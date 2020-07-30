class UserSerializer < ActiveModel::Serializer
  attributes :id, :activity_level, :email, :first_name, :last_name, :weight, :age, :height, :gender, :bmr, :tdee, :activity_level, :goal, :current_calories, :weight_log
  
  has_many :meals
  has_many :macros

  def weight_log
    object.weight_histories.map do |key|
      date = key.created_at.strftime('%m/%d/%Y')
       h = {date: date, weight: key.weight}
    end
  end

end
