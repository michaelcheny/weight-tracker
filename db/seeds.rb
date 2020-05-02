# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Meal.destroy_all

michael = User.create(
  email: "michael@michael.com", 
  password: "password", 
  gender: "male", 
  age: 27, 
  height:69, 
  weight: 188, 
  activity_level: "3", 
  bmr: 1818, 
  tdee: 2817, 
  goal: "lose half a pound a week",  
)

food1 = Meal.create(name: "scrambled eggs cooked in bacon fat", calories: 800, notes: "saved the bacon grease to cook with later")

michael.meals << food1