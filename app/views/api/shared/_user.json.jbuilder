json.id          user.id
json.username    user.username
json.userType    user.user_type
json.bio         user.bio
json.givenLoops do
  json.mappedLoops user.mapped_given_loops
  json.totalLoops user.total_given_loops
end
