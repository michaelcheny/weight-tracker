class CreateMacros < ActiveRecord::Migration[6.0]
  def change
    create_table :macros do |t|
      t.integer :fats, default: 0
      t.integer :proteins, default: 0
      t.integer :carbs, default: 0
      t.belongs_to :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
