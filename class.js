function City (name, population){
    this.name = name;
    this.population = population;

    this.getNAme = function () {
        console.log(`This is ${this.name}`);
    }
}
City.prototype.growing =function (){
    console.log(`The population is ${this.population} and growing up.`);
}
const lviv = new City ('Lviv', 1000000);
lviv.getNAme();
lviv.growing();





class F1Team {
    constructor (name, director, firstPilot, secondPilot, fromCountry){
        this.name = name; 
        this.director = director;
        this.firstPilot = firstPilot;
        this.secondPilot = secondPilot;
        this.fromCountry = fromCountry;
    }
    getName (){
        return console.log(`The team is called ${this.name}`);
    }
    whoIsDirector (){
        return console.log(`Director is ${this.director}`);
    }
    whoIsFirstPilot (){
        return console.log(`First pilot is ${this.firstPilot}`);
    } 
    whoIsSecondPilot (){
        return console.log(`Second pilot is ${this.secondPilot}`);
    } 
    fromWhere (){
        return console.log(`The ${this.name} is from ${this.fromCountry}`);
    }
}

const Ferrari = new F1Team('Ferrari', 'Mattia Binotto', 'Charles Leclerc', 'Carlos Sainz', 'Italy');
Ferrari.getName();
Ferrari.whoIsDirector();
Ferrari.whoIsFirstPilot();
Ferrari.whoIsSecondPilot();
Ferrari.fromWhere();





// //static
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    static isPerson(obj) {
        return console.log(obj.constructor === Person);
    }

    sayHi() {
        return console.log(`Hi ${this.firstName}`);
    }
}
 const robert = new Person("Robert", "Linkoln");
 console.log(robert)
 Person.isPerson(robert); //static 
 robert.sayHi();


class Boy extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName)
    }

    static isPerson(obj) {
        return console.log('changed');
    }

    sayHi() {
        return console.log(`Hi changed ${this.firstName}`);
    }
}
const john = new Boy('John', 'Travolta');
console.log(john)
Person.isPerson(john); //static 
john.sayHi();
Boy.isPerson(john);





// Scope and Execution context
const num1 = 10;

function func1() {
   const num2 = 20;

   function func2() {

        const num3 = 15;
        const output = num1 + num2 + num3;
        
        return output;

   }

  return console.log(func2());
  
}
func1();



// const obje = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
  
//   const unboundGetX = obje.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
//   // expected output: undefined
  
//   const boundGetX = unboundGetX.bind(obje);
//   console.log(boundGetX());
//   // expected output: 42
  

// const numbers = [5, 6, 2, 3, 7];

// const max = Math.max.apply(null, numbers);

// console.log(max);
// // expected output: 7

// const min = Math.min.apply(null, numbers);

// console.log(min);
// // expected output: 2


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
  
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }
  
//   console.log(new Food('cheese', 5).name);
//   // expected output: "cheese"
  