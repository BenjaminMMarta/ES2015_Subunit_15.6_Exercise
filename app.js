//--------------------Destructuring Exercise--------------------//

//Object Destructuring 1//
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;
console.log(numPlanets); // Prints 8
console.log(yearNeptuneDiscovered); //Prints 1846

//Object Destructuring 2//
let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  let {numPlanets, ...discoveryYears} = planetFacts;
  console.log(discoveryYears); //Prints {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3//
  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) //Prints "Your name is Alejandro and you like purple"
  getUserData({firstName: "Melissa"}) //Prints "Your name is Melissa and you like green"
  getUserData({}) //Prints "Your name is undefined and you like green"

//Array Destructuring 1//
let [first, second, third] = ["Maya", "Marisa", "Chi"];
console.log(first); // Prints "Maya"
console.log(second); // Prints "Marisa"
console.log(third); // Prints "Chi"

//Array Destructuring 2//
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  console.log(raindrops); //Prints "Raindrops on roses"
  console.log(whiskers); //Prints "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); //Prints ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3//
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]
console.log(numbers) //Prints [10,30,20]

//ES2015 Object Destructuring//
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  const {a,b} = obj.numbers

//ES2015 One-Line Array Swap with Destructuring//
[arr[0], arr[1]] = [arr[1], arr[0]]

//raceResults()//
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

//--------------------End--------------------//