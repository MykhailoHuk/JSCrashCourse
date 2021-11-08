// FunctionTypes
//=====================================================================

const Fn = (firstNumber,secondNumber) => {
    console.log(firstNumber*secondNumber);
    console.log('This is arrow function');
}

function fn (firstNumber,secondNumber) {
    console.log(firstNumber*secondNumber);
    console.log('This is function declaration');
}

const fN = function (firstNumber,secondNumber) {
    console.log(firstNumber*secondNumber);
    console.log('This is function expression');
}

const fun = (firstNumber,secondNumber) =>  firstNumber*secondNumber;

function FN (fun) {
    console.log('This is anonymous function');
}

Fn(3,5);
fn(3,5);
fN(3,5);
console.log(fun(3,5));
FN();

(function () {
    console.log('IIFE');
}) ();

const func = new Function ('firstNumber, secondNumber', 'return firstNumber*secondNumber');
console.log(func(3,5));

// Class
//=====================================================================

class F1Team {
    constructor (name, director, firstPilot, secondPilot, fromCountry){
        this.name = name; 
        this.director = director;
        this.firstPilot = firstPilot;
        this.secondPilot = secondPilot;
        this.fromCountry = fromCountry;
    }
    whatName (){
        return console.log('The team is called', this.name);
    }
    whoIsDirector (){
        return console.log('Director is', this.director);
    }
    whoIsFirstPilot (){
        return console.log('First pilot is', this.firstPilot);
    } 
    whoIsSecondPilot (){
        return console.log('Second pilot is', this.secondPilot);
    } 
    fromWhere (){
        return console.log('The', this.name + ' is from ', this.fromCountry);
    }
}

const Ferrari = new F1Team('Ferrari', 'Mattia Binotto', 'Charles Leclerc', 'Carlos Sainz', 'Italy');
Ferrari.whatName();
Ferrari.whoIsDirector();
Ferrari.whoIsFirstPilot();
Ferrari.whoIsSecondPilot();
Ferrari.fromWhere();

// Using functions
//=====================================================================

  const McLarenF1Team = {
    firstPilot : 'Lando Norris',
    firstPilotFrom : 'UK',
    secondPilot : 'Daniel Ricciardo',
    secondPilotFrom : 'Australia'
};
  
  function nationality (name) {
    console.log(name + ' is from');
   
    if (name === 'Lando Norris') {
      console.log('UK');
    } else {
      console.log('Australia');
    }
  }
  
  nationality(McLarenF1Team.firstPilot);
  nationality(McLarenF1Team.secondPilot);



const sum = (a,b) => a+b;
const min = (a,b) => a-b;
function res(point, a, b) {

            if (point==='+') {
                console.log(sum(a,b));
            } else if (point==='-'){
                console.log(min(a,b));
            }
            else {
                console.log('Error');
            }
        }
res('-', 4,2)

const print = (string) => console.log(string);
function saySmth(event, print) {
    if (event === 'start'){
        print('Hello!');
    } else if (event === 'end'){
        print('Bye!');
    } else {
        print('Hey!');
    }
}
saySmth('start', print);
saySmth('end', print);
saySmth('sdfsdfsdf', print);
  
