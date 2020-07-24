class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.references :user, null: false, foreign_key: true

      t.string :name
      t.string :description, default: nil
      t.integer :calories

      t.timestamps
    end
  end
end
