const rng = max => Math.floor(Math.random() * max) ;

const sample = array => array[rng(array.length)];

const youtubeUrlArray = [
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

const titleArray = [
  "Jesting Pilate",
  "The Man Within",
  "Oh! To be in England",
  "In a Dry Season",
  "The Heart Is Deceitful Above All Things",
  "The World, the Flesh and the Devil",
  "In Dubious Battle",
  "Endless Night",
  "The Road Less Traveled",
  "The Golden Bowl",
  "Those Barren Leaves, Thrones, Dominations",
  "O Jerusalem!",
  "It's a Battlefield",
  "The Line of Beauty",
  "The Wealth of Nations",
  "Shall not Perish",
  "Moab Is My Washpot",
  "The Far-Distant Oxus",
  "Brandy of the Damned",
  "Look to Windward",
  "Recalled to Life",
  "Great Work of Time",
  "A Passage to India",
  "Things Fall Apart",
  "Surprised by Joy",
  "Paths of Glory",
  "The Wings of the Dove",
  "A Passage to India",
  "Butter In a Lordly Dish",
  "Postern of Fate",
  "Let Us Now Praise Famous Men",
  "Down to a Sunless Sea",
  "Things Fall Apart",
  "To Your Scattered Bodies Go",
  "To Sail Beyond the Sunset",
  "Rosemary Sutcliff",
  "Frequent Hearses",
  "A Handful of Dust",
  "Look to Windward",
  "The Torment of Others"
];

export const randomYoutubeUrl = () => sample(youtubeUrlArray);

export const randomTitle = () => sample(titleArray);
