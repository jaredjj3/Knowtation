const rng = max => Math.floor(Math.random() * max) ;

const sample = array => array[rng(array.length)];

const youtubeUrlArray = [
  "https://youtu.be/w8uNZWDEYzQ",
  "https://youtu.be/ZASKyx-anks",
  "https://youtu.be/r9HIfBmGGaU"
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
