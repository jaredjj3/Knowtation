knowtation = @knowtation

json.id knowtation.id
json.title knowtation.title
json.authorName knowtation.user.username
json.userId knowtation.user.id
json.videoUrl knowtation.video_url
json.notationImageUrl asset_path(knowtation.notation_image.url)
json.scrollInstructions knowtation.scroll_instructions || '[]'
