# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

NUM_USERS = 10;
NUM_KNOWTATIONS = 25;
NUM_USER_LOOPS = 100;
NUM_KNOWTATION_TAGS = 4;
# IMAGES = Dir['/Users/Jared/Desktop/Knowtation/app/assets/images/thumbnails/*'];
IMAGES = [
  "app/assets/images/thumbnails/0001_samblakelock_happy-birthday_thumb.jpg",
  "app/assets/images/thumbnails/0002_samblakelock_colorful_neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0003_samblakelock_soulful-c_thumb.jpg",
  "app/assets/images/thumbnails/0004_samblakelock_instantnotation_thumb.jpg",
  "app/assets/images/thumbnails/0005_samblakelock_easy-neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0006_samblakelock_dm-neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0007_samblakelock_jingle-bells_thumb.jpg",
  "app/assets/images/thumbnails/0010_kappatanabe_suhr-gospel-chords_thumb.jpg",
  "app/assets/images/thumbnails/0011_johnmayertone_mayer-groove_thumb.jpg",
  "app/assets/images/thumbnails/0012_rodrigogouveia_neosoul-fusion_thumb.jpg",
  "app/assets/images/thumbnails/0013_FranciscoBaptista_portugal-neosoul_thumb.jpg",
  "app/assets/images/thumbnails/0014_LukeKennedyAiono_jazz-gospel-chords_thumb.jpg",
  "app/assets/images/thumbnails/0015_shanebarnes_ambient-improv_thumb.jpg",
  "app/assets/images/thumbnails/0016_shanebarnes_ambient-tele_thumb.jpg",
  "app/assets/images/thumbnails/0017_shanebarnes_ambient-ii-v-i_thumb.jpg",
  "app/assets/images/thumbnails/0018_jakecurran_stratocasting_thumb.jpg",
  "app/assets/images/thumbnails/0019_hannahmurphy_spanish-romance_thumb.jpg",
  "app/assets/images/thumbnails/0020_philgoldenberg_bach-fugue_thumb.jpg",
  "app/assets/images/thumbnails/0021_MichielStekelenburg_open-string_thumb.jpg",
  "app/assets/images/thumbnails/0022_MichielStekelenburg_straturday_thumb.jpg",
  "app/assets/images/thumbnails/0023_RCrossell_chord-scape_thumb.jpg",
  "app/assets/images/thumbnails/0024_DillanWitherow_amazing-stratocaster_thumb.jpg",
  "app/assets/images/thumbnails/0025_DillanWitherow_gravitas_thumb.jpg",
  "app/assets/images/thumbnails/0026_Kerry2smooth_prs-groove_thumb.jpg",
  "app/assets/images/thumbnails/0027_Kerry2smooth_acoustic-soul_thumb.jpg",
  "app/assets/images/thumbnails/0028_Kerry2smooth_slow-jam_thumb.jpg",
  "app/assets/images/thumbnails/0030_DanielDonato_bluegrass_thumb.jpg",
  "app/assets/images/thumbnails/0031_TaylorDearman_reverb_thumb.jpg",
  "app/assets/images/thumbnails/0035_CynthiaMaalouf_Chicken-Pickn-_thumb.jpg",
  "app/assets/images/thumbnails/0036_JoshMartin_pulloffs_splash.jpg",
  "app/assets/images/thumbnails/0042_ManeliJamal_acoustic-minimal_thumbnail.jpg",
  "app/assets/images/thumbnails/0043_CimFrodo_tides_thumb.jpg",
  "app/assets/images/thumbnails/0045_Walt-Druce_spain-ish_thumb.jpg",
  "app/assets/images/thumbnails/0047_Kristof_Clean-tone_thumb.jpg",
  "app/assets/images/thumbnails/0050_DannyMcKinnon_neo-soul-don_thumb.jpg",
  "app/assets/images/thumbnails/0051_eversonmenezes_jazz-fusion_thumb.jpg",
  "app/assets/images/thumbnails/0052_diegobaroza_epic-jazz-fusion_thumb.jpg",
  "app/assets/images/thumbnails/0053_zakkjones_gibson-groove_splash.jpg"
]

MISC = [
  "app/assets/images/misc/misc1.png",
  "app/assets/images/misc/misc2.png",
  "app/assets/images/misc/misc3.png",
  "app/assets/images/misc/misc4.png",
  "app/assets/images/misc/misc5.png",
  "app/assets/images/misc/misc6.png",
  "app/assets/images/misc/misc8.png",
  "app/assets/images/misc/misc9.png",
  "app/assets/images/misc/misc10.png",
  "app/assets/images/misc/misc11.png",
  "app/assets/images/misc/misc12.png",
  "app/assets/images/misc/misc13.png",
  "app/assets/images/misc/misc14.png"
]

NOTATION = [
  ["app/assets/images/notation/notation1.jpg", "[{\"pos\":{\"x\":146.5,\"y\":76},\"id\":0,\"time\":0},{\"pos\":{\"x\":515.5,\"y\":66},\"id\":1,\"time\":4},{\"pos\":{\"x\":1372.5,\"y\":83},\"id\":2,\"time\":10},{\"pos\":{\"x\":2107.5,\"y\":73},\"id\":3,\"time\":16}]"],
  ["app/assets/images/notation/notation2.jpg", "[{\"pos\":{\"x\":99.5,\"y\":128},\"id\":0,\"time\":0},{\"pos\":{\"x\":496.5,\"y\":100},\"id\":1,\"time\":5},{\"pos\":{\"x\":1309.5,\"y\":95},\"id\":2,\"time\":12},{\"pos\":{\"x\":1610.5,\"y\":99},\"id\":3,\"time\":16}]"],
  ["app/assets/images/notation/notation3.jpg", "[{\"pos\":{\"x\":129.5,\"y\":100},\"id\":0,\"time\":0},{\"pos\":{\"x\":537.5,\"y\":78},\"id\":1,\"time\":5},{\"pos\":{\"x\":885.5,\"y\":75},\"id\":2,\"time\":7},{\"pos\":{\"x\":1779.5,\"y\":87},\"id\":3,\"time\":16}]"],
  ["app/assets/images/notation/notation4.jpg", "[{\"pos\":{\"x\":105.5,\"y\":105},\"id\":0,\"time\":0},{\"pos\":{\"x\":510.5,\"y\":99},\"id\":1,\"time\":4.5},{\"pos\":{\"x\":1202.5,\"y\":97},\"id\":2,\"time\":9.7},{\"pos\":{\"x\":1887.5,\"y\":83},\"id\":3,\"time\":16}]"],
  ["app/assets/images/notation/notation5.jpg", "[{\"pos\":{\"x\":72.5,\"y\":106},\"id\":1,\"time\":0},{\"pos\":{\"x\":375.5,\"y\":95},\"id\":2,\"time\":2.3},{\"pos\":{\"x\":783.5,\"y\":65},\"id\":3,\"time\":9.18188},{\"pos\":{\"x\":1469.5,\"y\":104},\"id\":4,\"time\":16}]"],
  ["app/assets/images/notation/notation6.jpg", "[{\"pos\":{\"x\":100.5,\"y\":74},\"id\":0,\"time\":0},{\"pos\":{\"x\":359.5,\"y\":78},\"id\":1,\"time\":3.77},{\"pos\":{\"x\":1069.5,\"y\":103},\"id\":2,\"time\":5.6},{\"pos\":{\"x\":1569.5,\"y\":88},\"id\":3,\"time\":9},{\"pos\":{\"x\":1934.5,\"y\":105},\"id\":4,\"time\":16}]"],
]

YOUTUBE_LINKS = [
  "w8uNZWDEYzQ",
  "ZASKyx-anks",
  "r9HIfBmGGaU"
]

TIME_AGO_SECS = 604_800 * 1.5

User.destroy_all
UserLoop.destroy_all
Knowtation.destroy_all
Tagging.destroy_all
Tag.destroy_all

[
  'acoustic',
  'ambient',
  'beginner',
  'classical',
  'gospel',
  'jazz',
  'neosoul',
  'fusion',
  'metal'
].each { |tag_name| Tag.create!(name: tag_name) }
TAGS = Tag.all

User.create!(
  username: 'jaredjj3',
  password: 'password',
  user_type: 'teacher',
  bio: Faker::Lorem.paragraph(2, true, 4),
  profile_picture: File.open(MISC.sample)
)

User.create!(
  username: 'guest_student',
  password: 'password',
  bio: Faker::Lorem.paragraph(2, true, 4),
  profile_picture: File.open(MISC.sample)
)

User.create!(
  username: 'guest_teacher',
  password: 'password',
  user_type: 'teacher',
  bio: Faker::Lorem.paragraph(2, true, 4),
  profile_picture: File.open(MISC.sample)
)

rng = Random.new

# --------------
NUM_USERS.times do
  username = Faker::Internet.user_name + rng.rand(20).to_s
  password = Faker::Internet.password
  user_type = rng.rand > 0.5 ?  'teacher' : 'student'
  bio = Faker::Lorem.paragraph(2, true, 4)

  user = User.create!(
    username: username,
    password: password,
    user_type: user_type,
    bio: bio,
    profile_picture: File.open(MISC.sample)
  )

  time_ago = rng.rand(TIME_AGO_SECS)
  user.created_at -= rng.rand(time_ago)
  user.save!

  NUM_USER_LOOPS.times do
    user_loop = UserLoop.create!(
      knowtation_id: (rng.rand(1..NUM_KNOWTATIONS)),
      user_id: user.id
    )
    user_loop.created_at -= rng.rand(time_ago)
    user_loop.save!
  end
end

# For the first three users
(1..3).each do |user_id|
  time_ago = rng.rand(TIME_AGO_SECS)
  NUM_USER_LOOPS.times do
    user_loop = UserLoop.create!(
      knowtation_id: (rng.rand(1..NUM_KNOWTATIONS)),
      user_id: user_id
    )
    user_loop.created_at -= rng.rand(time_ago)
    user_loop.save!
  end
end

# --------------

def random_teacher
  User.where(user_type: 'teacher').sample
end
NUM_KNOWTATIONS.times do
  notation = NOTATION.sample
  knowtation = Knowtation.create!(
    user_id: random_teacher.id,
    title: Faker::Book.title,
    video_url: YOUTUBE_LINKS.sample,
    thumbnail: File.open(IMAGES.sample),
    notation_image: File.open(notation[0]),
    scroll_instructions: notation[1]
  )

  length = Tag.all.length
  Tag.all.shuffle[0..rand(0...3)].each do |tag|
    Tagging.create!(knowtation_id: knowtation.id, tag_id: tag.id)
  end
end

# --------------
