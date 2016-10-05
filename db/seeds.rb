# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
User.create!(username: 'jaredjj3', password: 'password')
User.create!(username: 'guest_student', password: 'password')
User.create!(username: 'guest_teacher', password: 'password')

50.times do
  username = Faker::Internet.user_name
  password = Faker::Internet.password
  User.create!(username: username, password: password)
end
