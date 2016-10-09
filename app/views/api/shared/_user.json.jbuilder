json.id                 user.id
json.username           user.username
json.userType           user.user_type
json.bio                user.bio
json.profilePictureUrl  asset_path(user.profile_picture.url)
json.givenLoops do
  json.mappedLoops user.mapped_given_loops
  json.totalLoops user.total_given_loops
end
