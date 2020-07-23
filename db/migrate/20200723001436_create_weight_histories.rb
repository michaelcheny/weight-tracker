class CreateWeightHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :weight_histories do |t|
      t.references :user, null: false, foreign_key: true
      
      t.integer :weight

      t.timestamps
    end
  end
end
