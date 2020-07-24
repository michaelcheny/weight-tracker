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
  first_name: "michael",
  last_name: "chen",
  password: "password",
  password_confirmation: "password", 
  gender: "male", 
  age: 28, 
  height: 69, 
  weight: 180, 
  activity_level: "3", 
  bmr: 1818, 
  tdee: 2817, 
  goal: "lose half a pound a week",  
)

food1 = Meal.create(name: "scrambled eggs cooked in bacon fat", calories: 800, description: "saved the bacon grease to cook with later")

michael.meals << food1

weight1 = WeightHistory.create(weight: 185)
weight2 = WeightHistory.create(weight: 190)
weight3 = WeightHistory.create(weight: 195)
weight4 = WeightHistory.create(weight: 190)
weight5 = WeightHistory.create(weight: 175)

michael.weight_histories << weight1
michael.weight_histories << weight2
michael.weight_histories << weight3
michael.weight_histories << weight4
michael.weight_histories << weight5 