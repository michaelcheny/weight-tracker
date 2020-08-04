namespace :db do
  desc "Reset current calories to 0."
  task reset_calories: :environment do
    User.update_all(current_calories: 0)
  end
end
