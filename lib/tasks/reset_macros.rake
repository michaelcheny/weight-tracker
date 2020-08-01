namespace :db do
  desc 'Reset macronutrients back to 0 everyday at 12:00am.'
  task :reset_macros => :environment do
    Macro.update_all(fats: 0, proteins: 0, carbs: 0)
  end
end
