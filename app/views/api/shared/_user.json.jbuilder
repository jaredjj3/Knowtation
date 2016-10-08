json.id          user.id
json.username    user.username
json.userType    user.user_type
json.bio         user.bio

rng = Random.new
json.givenLoops(user.user_loops) do |user_loop|
  created_at = user_loop.created_at
  days_ago = (Time.now.to_date - Time.at(created_at).to_date).to_i
  date = Time.at(created_at).to_date
  num_loops_on_date = user.num_loops_on_date(date)
  json.array! [ days_ago, num_loops_on_date ]
end
