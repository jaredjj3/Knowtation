json.knowtations do
  json.array! @knowtations.map do |knowtation|
    json.id knowtation.id
  end
end
