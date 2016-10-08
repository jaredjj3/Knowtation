# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

NUM_USERS = 20;
NUM_KNOWTATIONS = 5;

User.destroy_all
User.create!(username: 'jaredjj3', password: 'password')
User.create!(username: 'guest_student', password: 'password')
User.create!(username: 'guest_teacher', password: 'password')


UserLoop.destroy_all
rng = Random.new
NUM_USERS.times do
  username = Faker::Internet.user_name + "_test"
  password = Faker::Internet.password
  user_type = rng.rand(99) < 9 ?  'teacher' : 'student'
  bio = rng.rand(99) < 75 ? Faker::Hacker.say_something_smart : ""

  user = User.create!(
    username: username,
    password: password,
    user_type: user_type,
    bio: bio)

  time_ago = rng.rand(604_800) # number of seconds in a week
  user.created_at -= time_ago
  user.save!

  num_loops = rng.rand(100)
  num_loops.times do
    user_loop = UserLoop.create!(knowtation_id: (rng.rand(10) + 1), user_id: user.id)
    user_loop.created_at -= rng.rand(time_ago)
    user_loop.save!
  end
end
