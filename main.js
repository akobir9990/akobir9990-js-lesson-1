// objects

// foodbal players

let ronaldo = {
  name: "Cristiano Ronaldo",
  birthYear: 1985,
  from: "Portugal",
  height: 187,
  weight: 84,
};
let isco = {
  name: "Isco Alarcon",
  birthYear: 1992,
  from: "Spain",
  height: 176,
  weight: 75,
};
let maradona = {
  name: "Diego Maradona",
  birthYear: 1960,
  from: "Argentina",
  height: 165,
  weight: 70,
};
let pele = {
  name: "Edson Arantes do Nascimento",
  birthYear: 1940,
  from: "Brazilia",
  height: 173,
  weight: 65,
};
let messi = {
  name: "Lionel Andrés Messi",
  birthYear: 1987,
  from: "Argentina",
  height: 169,
  weight: 63,
};
let benzema = {
  name: "Karim Mostafa Benzema",
  birthYear: 1987,
  from: "Fransia",
  height: 187,
  weight: 80,
};
let zidane = {
  name: "Zinedine Zidane",
  birthYear: 1972,
  from: "Fransia",
  height: 185,
  weight: 80,
};
let ozil = {
  name: "Mesut Özil",
  birthYear: 1988,
  from: "German",
  height: 183,
  weight: 76,
};
let guler = {
  name: "Arda Guler",
  birthYear: 2005,
  from: "Turkey",
  height: 176,
  weight: 65,
};
let modric = {
  name: "Luka Modric",
  birthYear: 1985,
  from: "Croatia",
  height: 172,
  weight: 67,
};

// cars

let hiphiZ = {
  company: "HiPhi",
  name: "HiPhi Z",
  hp: 672,
  maxSpeed: 400, //max speed in km/h
  price: 100000,
};
let gelik = {
  company: "Mercedes Benz",
  name: "G Wagon",
  hp: 416,
  maxSpeed: 350,
  price: 350000,
};
let bmwx7 = {
  company: "BMW",
  name: "BMW X7",
  hp: 671,
  maxSpeed: 400, //max speed in km/h
  price: 120000,
};
let escalade = {
  company: "cadillac",
  name: "escalade",
  hp: 420,
  maxSpeed: 125, //max speed in km/h
  price: 105220,
};

// ufs fighters

let khabib = {
  name: "Khabib Nurmagamedov",
  height: 178,
  weight: 70,
  fights: 29,
  wins: 29,
  ganarar: 6000900,
};

let me = {
  firstName: "Akobir",
  surName: "Qushshayev",
  age: 24,
  married: false,
  getFullName() {
    return console.log(``);
  },
};

// arrays
let footbalPlayers = [
  ronaldo,
  isco,
  maradona,
  pele,
  messi,
  benzema,
  zidane,
  ozil,
  guler,
  modric,
];

let cars = [hiphiZ, gelik, bmwx7, escalade];

console.log(cars.length);
console.log(cars[3]);

// functions , conditional operators

function richBoy() {
  if (cars.length > 5) {
    console.log("u r big booyy");
  } else {
    alert("dude you have to work, you don't have enought cars man");
  }
}
richBoy();

// hoisting
console.log(name);
let name = "Akobir";

console.log(surName);
const surName = "Qushshayev";

console.log(nickName);
var nickName = "comandor";

