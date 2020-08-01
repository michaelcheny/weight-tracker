namespace :db do
  desc 'Reset macronutrients back to 0.'
  task :reset_macros => :environment do
    Macro.update_all(fats: 0, proteins: 0, carbs: 0)
  end
end
