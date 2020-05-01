class CreateMeals < ActiveRecord::Migration[6.0]
  def change
    create_table :meals do |t|
      t.references :user, null: false, foreign_key: true

      t.string :name
      t.integer :calories
      t.string :notes

      t.timestamps
    end
  end
end
