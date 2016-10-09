json.array! @knowtations.map do |knowtation|
  json.id knowtation.id
  json.title knowtation.title
  json.user knowtation.user.username
  json.thumbnailUrl knowtation.thumbnail.url
  json.receivedLoops knowtation.received_loops
end
