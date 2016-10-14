json.array! @knowtations.map do |knowtation|
  json.id knowtation.id
  json.title knowtation.title
  json.user do
    json.id knowtation.user.id
    json.username knowtation.user.username
  end
  json.thumbnailUrl knowtation.thumbnail.url
  json.receivedLoops knowtation.received_loops
  json.tags do
    json.array! knowtation.tags.map { |tag| {id: tag.id, name: tag.name} }
  end
end
