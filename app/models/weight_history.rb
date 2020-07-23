class WeightHistory < ApplicationRecord
  belongs_to :user

  def date
   created_at.strftime("%m/%d/%Y")
  end
end
