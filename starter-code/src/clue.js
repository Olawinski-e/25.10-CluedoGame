// ITERATION 1

// Characters
const mrGreen = {
  first_name: "Jacob",
  last_name: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image:
    "https: //pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
  occupation: "Entrepreneur"
};

const drOrchid = {
  first_name: "Doctor",
  last_name: "Orchid",
  color: "white",
  description: "PhD in plant toxocology.Adopted daughter of Mr. boddy",
  age: 26,
  image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Scientist"
};

const profPlum = {
  first_name: "Victor",
  last_name: "Plum",
  color: "purple",
  description: "Billionaire video gamer designer",
  age: 22,
  image:
    " https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
  occupation: "Designer"
};

const missScarlet = {
  first_name: "Kasandra",
  last_name: "Scarlet",
  color: "red",
  description: "She is a A-list movie star with a dark past",
  age: 31,
  image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
  occupation: "Actor"
};

const mrsPeacock = {
  first_name: "Eleanor",
  last_name: "Peacock",
  color: "blue",
  description:
    "She is from a wealthy family and her status and money to earn popularity",
  age: 36,
  image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
  occupation: "Socialité"
};

const mrMustard = {
  first_name: "Jack",
  last_name: "Mustard",
  color: "yellow",
  description:
    "He is a former football player who tries to get by on his former glory",
  age: 62,
  image:
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
  occupation: "Retired Football player"
};

// Weapons
const rope = { name: "rope", weight: 10 };
const knife = { name: "knife", weight: 8 };
const candlestick = { name: "candlestick", weight: 2 };
const bat = { name: "bat", weight: 13 };
const trophy = { name: "trophy", weight: 25 };
const pistol = { name: "pistol", weight: 20 };

// Rooms
const diningRoom = { name: "Dining Room" };
const kitchen = { name: "Kitchen" };
const livingRoom = { name: "Living Room" };
const observatory = { name: "Observatory" };
const theater = { name: "Theater" };
const guestHouse = { name: "Guest House" };
const patio = { name: "Patio" };

// Suspects Collection
const suspectsArray = [
  mrGreen,
  mrsPeacock,
  drOrchid,
  profPlum,
  missScarlet,
  mrMustard
];

// Rooms Collection
const roomsArray = [
  diningRoom,
  kitchen,
  livingRoom,
  observatory,
  theater,
  guestHouse,
  patio
];

// Weapons Collection
const weaponsArray = [rope, knife, candlestick, bat, trophy, pistol];

// ITERATION 2
// Random Selector
// Create a function selectRandom to randomly select one element from a card stack.The method should receive an array as an argument, and return randomly one of the elements of the array.

function selectRandom(array) {
  if (array.length === 0) {
    return undefined;
  } else {
    return array[Math.floor(Math.random() * array.length)];
  }
}
console.log(selectRandom(weaponsArray));
console.log(selectRandom(roomsArray));
console.log(selectRandom(suspectsArray));

// Create the mystery
// We need to create a pickMystery function that will call selectRandom for each card stack, and return an object with the 3 picked cards, a suspect, a weapon and a room. Our mystery should be stored on a mysteryEnvelope variable.

let mysteryEnvelope = {};

function pickMystery() {
  mysteryEnvelope.suspect = selectRandom(suspectsArray);
  mysteryEnvelope.room = selectRandom(roomsArray);
  mysteryEnvelope.weapon = selectRandom(weaponsArray);

  return mysteryEnvelope;
}

console.log(mysteryEnvelope);
pickMystery();

// ITERATION 3
// Finally, we need to reveal the mystery.Create a revealMystery function, that will receive our mysteryEnvelope object as an argument and return the revealed mystery like this:
//<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!!!!

function revealMystery() {
  console.log(mysteryEnvelope.suspect);
  return `${mysteryEnvelope.suspect.first_name} ${mysteryEnvelope.suspect.last_name} killed Mr. Boddy using the ${mysteryEnvelope.weapon.name} in the ${mysteryEnvelope.room.name}!!!!`;
}

revealMystery();
