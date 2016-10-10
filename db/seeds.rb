# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

NUM_USERS = 10;
NUM_KNOWTATIONS = 25;
# IMAGES = Dir['/Users/Jared/Desktop/Knowtation/app/assets/images/thumbnails/*'];
IMAGES =[
  "app/assets/images/thumbnails/0001_samblakelock_happy-birthday_thumb.jpg",
  "app/assets/images/thumbnails/0002_samblakelock_colorful_neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0003_samblakelock_soulful-c_thumb.jpg",
  "app/assets/images/thumbnails/0004_samblakelock_instantnotation_thumb.jpg",
  "app/assets/images/thumbnails/0005_samblakelock_easy-neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0006_samblakelock_dm-neo-soul_thumb.jpg",
  "app/assets/images/thumbnails/0007_samblakelock_jingle-bells_thumb.jpg",
  "app/assets/images/thumbnails/0008_samblakelock_silent-night_thumb.jpg",
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
  "app/assets/images/thumbnails/0029_Beau_sunshine_thumb.jpg",
  "app/assets/images/thumbnails/0030_DanielDonato_bluegrass_thumb.jpg",
  "app/assets/images/thumbnails/0031_TaylorDearman_reverb_thumb.jpg",
  "app/assets/images/thumbnails/0035_CynthiaMaalouf_Chicken-Pickn-_thumb.jpg",
  "app/assets/images/thumbnails/0036_JoshMartin_pulloffs_splash.jpg",
  "app/assets/images/thumbnails/0042_ManeliJamal_acoustic-minimal_thumbnail.jpg",
  "app/assets/images/thumbnails/0043_CimFrodo_tides_thumb.jpg",
  "app/assets/images/thumbnails/0045_Walt-Druce_spain-ish_thumb.jpg",
  "app/assets/images/thumbnails/0047_Kristof_Clean-tone_thumb.jpg",
  "app/assets/images/thumbnails/0049_DannyMcKinnon_spanky-alford_thumb.jpg",
  "app/assets/images/thumbnails/0050_DannyMcKinnon_neo-soul-don_thumb.jpg",
  "app/assets/images/thumbnails/0051_eversonmenezes_jazz-fusion_thumb.jpg",
  "app/assets/images/thumbnails/0052_diegobaroza_epic-jazz-fusion_thumb.jpg",
  "app/assets/images/thumbnails/0053_zakkjones_gibson-groove_splash.jpg"
]

YOUTUBE_LINKS = [
  "https://www.youtube.com/watch?v=476vNb6thyM",
  "https://www.youtube.com/watch?v=RCMvIBVpy8s",
  "https://youtu.be/-yPEewaalik",
  "https://www.youtube.com/watch?v=3bT3CH6Wr4g",
  "https://www.youtube.com/watch?v=tA8mLuYJJyo",
  "https://www.youtube.com/watch?v=MTxYiFB-QM4",
  "https://www.youtube.com/watch?v=sH8mfxvoUts",
  "https://www.youtube.com/watch?v=6VAkOhXIsI0",
  "https://www.youtube.com/watch?v=shV9iEwkaN0",
  "https://youtu.be/Q8AId2ltAfY",
  "https://youtu.be/edVbz_uXJd0",
  "https://youtu.be/spZMuyf4FYA",
  "https://youtu.be/rhXXT5Ir_ok"
];


User.destroy_all
UserLoop.destroy_all
Knowtation.destroy_all

User.create!(username: 'jaredjj3', password: 'password')
User.create!(username: 'guest_student', password: 'password')
User.create!(username: 'guest_teacher', password: 'password', user_type: 'teacher')


rng = Random.new
NUM_USERS.times do
  username = Faker::Internet.user_name + rng.rand(20).to_s
  password = Faker::Internet.password
  user_type = rng.rand(99) < 9 ?  'teacher' : 'student'
  bio = rng.rand(99) < 75 ? Faker::Hacker.say_something_smart : ""

  user = User.create!(
    username: username,
    password: password,
    user_type: user_type,
    bio: bio,
    profile_picture: File.open(IMAGES.sample)
  )

  time_ago = rng.rand(604_800) # number of seconds in a week
  user.created_at -= time_ago
  user.save!

  num_loops = rng.rand(100)
  num_loops.times do
    user_loop = UserLoop.create!(
      knowtation_id: (rng.rand(1..NUM_KNOWTATIONS)),
      user_id: user.id
    )
    user_loop.created_at -= rng.rand(time_ago)
    user_loop.save!
  end
end

NUM_KNOWTATIONS.times do
  Knowtation.create!(
    user_id: (rng.rand(User.first.id..User.last.id)),
    title: Faker::Book.title,
    video_url: YOUTUBE_LINKS.sample,
    thumbnail: File.open(IMAGES.sample),
    notation_image: File.open(IMAGES.sample)
  )
end
