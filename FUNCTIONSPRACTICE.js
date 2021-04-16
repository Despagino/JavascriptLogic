// function greet(age) {
//     console.log(`Hi I am ${age} yeasr old.`)
// }

// greet("45")

// function repeat(something, num) {
//     let result = '';
//     for (let i = 0; i < num; i++) {
//         result += something;
//     }
//     console.log(result)
// }

// repeat("$", 5)

// function isSnakeEyes(x, y) {
//     if (x === 1 && y === 1) {
//         console.log("Snake Eyes!");
//     } else {
//         console.log("Not Snake Eyes!");
//     }
// }

// isSnakeEyes(2, 1);

// function sum(x, y) {
//     if (typeof x != Number || typeof y != Number) {
//         return false;
//     }
//     return x + y;
// }

// function isShortsWeather(temperature) {
//     if (temperature >= 75) {
//         return true;
//     }
//     return false;
// }


// function lastElement(array) {
//     if (array.length === 0) {
//         return null;
//     }
//     return array[array.length - 1];
// }

// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// const day = {
//     1: "Monday",
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
// }
//--------------------------------------------------------
//PRACTICE STUFF
//--------------------------------------------------------

// THE HIEARCHY OF A FUNCTION

// function nbaplayers() {
//     let goat = ['mj', 'lebron', 'kareem', 'wilt', 'scalabrine']
//     let place2 = ['kobe', 'shaq', 'AI', 'dirk']
//     function explain() {
//         function cmon() {
//             for (let list of place2) {
//                 console.log(list)
//             }
//         }
//         cmon()
//     }
//     explain()
// }

//--------------------------------------------------------
// FUNCTION WITHIN A FUNCTION


// function callTwice(func) {
//     func()
//     func()
// }

// function rollDie() {
//     console.log(Math.floor(Math.random() * 10) + 1)
// }

// callTwice(rollDie)

//--------------------------------------------------------
// RETURNING FUNCTIONS

// function makeBetween(min, max) {
//     return function (num) {
//         return num >= min && num <= max
//     }
// }


//--------------------------------------------------------

// MAKE FUNCTIONS AS VALUES ON OBJECTS
// METHODS
// const math = {

//     multiply: function (x, y) {
//         return x * y;
//     },
//     divide: function (x, y) {
//         return x / y;
//     },
//     square: function (x) {
//         return x * x;
//     }
// };

// SHORTHAND

// const math = {
//     multiply(x, y) {
//         return x * y;
//     },
//     add(x, y) {
//         return x + y;
//     }
// }

//--------------------------------------------------------
// USING "THIS" KEYWORD

// const perfectPlayer = {
//     height: "6'9",
//     weight: 250,
//     hof() {
//         console.log(`HOF BADGE, ${this.height} and ${this.weight}`)
//     }
// }

// const movies = [
//     {
//         title: 'Parasite',
//         score: 98
//     },
//     {
//         title: 'Titanic',
//         score: 90
//     },
//     {
//         title: 'Slumdog Millionaire',
//         score: 95
//     },
//     {
//         title: '3 Idiots',
//         score: 99
//     }
// ]

// let highRated = movies.reduce((high, title) => {
//     if (title.score > high.score) {
//         return title;
//     }
//     return high;
// }
// )

// movies.forEach(function (list) {
//     console.log(`${list.title} - ${list.score}/100`);
// })
// const rating = movies.forEach(scores => console.log(scores.score))

// const titleOnly = movies.map(function (title) {
//     return title.title
// })

// const titleOnly = movies.map(title => title.title)


// const goodTitles = movies.filter(m => m.score > 95).map(m => m.title)
// ----------------------------------------------------

// FILTER METHOD


// const nums = [10, 2, 6, 8, 3, 9, 1, 4];

// const evens = nums.filter(even => even % 2 === 0)
// console.log(evens)


// const userNames = ['mark', 'stecysmom1231123', 'jennay', 'sadfasdf1234324', 'lol', 'laughinbal']


// const validUserNames = userNames.filter(fil => fil.length < 10);


// const validUserNames = arr => arr.filter(fil => fil.length < 10)

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// const lowScores = exams.filter(x => x < 83).map(m => m)


// ----------------------------------------------
// USING THIS KEYWORD WITH ARROW FUNCTIONS


// const person = {
//     firstName: 'Gino',
//     lastName: 'Tasis',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function () {
//         setTimeout(() => {
//             console.log(this.fullName())
//         }, 2000)
//     }
// }


// -----------------------------------
// DEFAULT PARAMETERS

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// -----------------------------------
// USING SPREAD METHOD

// const nums = [1, 345, 232, 5564, 7, 223, 6, 7];
// const string = "GinoTasis";
//how can iterate over this array using spread??

// console.log(Math.max(...nums)) // 5564

// console.log(...string)


// -----------------------------------
// USING REST PARAMETERS

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`You are first place, ${gold}!`)
//     console.log(`You are second place, ${silver}!`)
//     console.log(`Thank you for participating, ${everyoneElse}!`)
// }

// -----------------------------------
// DESTRUCTURING ARRAYS

// const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// const [highest, secondheighest] = scores;

// console.log(highest)


// let heighest = scores[0]
// -----------------------------------

//DESTRUCTING OBJECTS

// const runner = {
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "Kenya",
//     achievement: "Sub 2 hour"
// }

// const { country: hometown, achievement: bestknownFor } = runner

// -----------------------------------
//DESTRUCTURING PARAMETERS

// ---------------------------------------------

// let person = {
//     firstname: "Bugs",
//     lastname: " Bunny",
//     speed: 95,
//     agility: 90,
//     swag: 100,
//     result: 0,
//     fullName: function () {
//         return this.firstname + this.lastname
//     },
//     calculateAverage: function () {
//         this.result = (this.speed + this.agility + this.swag) / 3
//     }
// }

let playerGrades = new Map();

playerGrades.set(1, "Lebron James")
playerGrades.set(2, "Stephen Curry")
playerGrades.set(3, "James Harden")
playerGrades.set(4, "Kobe Bryant")
playerGrades.set(5, "Giannis An")
playerGrades.set(6, "Kawhi Leonard")
playerGrades.set(7, "Anthony Davis")
playerGrades.set(8, "Kevin Durant")
playerGrades.set(9, "Luka Doncic")
playerGrades.set(10, "Kemba Walker")

console.log(playerGrades.size)
console.log(playerGrades.values())
console.log(playerGrades.has(3))
console.log(playerGrades.delete(3))
console.log(playerGrades.has(3))
console.log(playerGrades.size)