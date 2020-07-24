class CreateMacros < ActiveRecord::Migration[6.0]
  def change
    create_table :macros do |t|
      t.integer :fats
      t.integer :proteins
      t.integer :carbs
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
