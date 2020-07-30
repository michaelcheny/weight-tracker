class WeightHistorySerializer < ActiveModel::Serializer
  attributes :id, :date, :weight

  def date
      object.created_at.strftime('%m/%e/%y')
  end
end
