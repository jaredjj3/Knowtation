json.id          user.id
json.username    user.username
json.userType    user.user_type
json.bio         user.bio

rng = Random.new
json.givenLoops(user.user_loops) do |user_loop|
  json.knowtationId   user_loop.knowtation_id
  json.createdAt (user_loop.created_at + rng.rand(5_000_000)).strftime("%b %d %Y %H:%M")
end
