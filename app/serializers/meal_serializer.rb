class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :calories, :time

  def time
    object.created_at.strftime('%m/%e/%y, %l:%M%P')
  end
end
