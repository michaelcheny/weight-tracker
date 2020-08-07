class WeightHistorySerializer < ActiveModel::Serializer
  attributes  :date, :weight

  def date
      object.created_at.strftime('%m/%e/%y').gsub(/\s+/, "").delete_prefix("0")
  end
end
