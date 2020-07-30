class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :calories

  def time
    object.created_at.strftime('%m/%e/%y , %l:%M %p')
  end
end
