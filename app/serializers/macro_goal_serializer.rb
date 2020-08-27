class MacroGoalSerializer < ActiveModel::Serializer
  attributes :fats, :proteins, :carbs
  has_one :user
end
