class CreateWeightHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :weight_histories do |t|
      t.integer :weight
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
