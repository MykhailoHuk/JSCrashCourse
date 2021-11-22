function Country (name, population, location){
    this.name = name;
    this.population = population;
    this.location = location;

    this.getNAme = function () {
        console.log(`This is ${this.name}.`);
    }
    this.getlocation = function () {
        console.log(`The ${this.name} is located in ${this.location}.`);
    }
}
Country.prototype.growingUp =function (){
    console.log(`The population is ${this.population} and growing up.`);
}
Country.prototype.growingDown =function (){
    console.log(`The population is ${this.population} and growing down.`);
}
const ukr = new Country ('Ukraine', 40000000, 'East Europe');
ukr.getNAme();
ukr.growingUp();
ukr.getlocation();

const bel = new Country ('Belarus', 9000000, 'East Europe')
bel.getNAme();
bel.growingDown();
bel.getlocation();




class Animal {
    constructor (name, food, move, sound){
        this.name = name;
        this.food = food;
        this.move = move;
        this.sound = sound;
    }
    getName (){
        return console.log(`It is called ${this.name}`);
    }
    getFood (){
        return console.log(`It eats ${this.food}`);
    }
    WhatItDoes (){
        return console.log(`${this.name} is ${this.move}.`);
    }
    getSound (){
        return console.log(`${this.sound}`);
    }
}

class Dog extends Animal {
    constructor (name, food, move, sound) {
        super (name, food, move, sound);
    }
    speak (){
        return console.log(`The dog is speaking: ${this.sound}! ${this.sound}! ${this.sound}!`);
    }
}
const hachiko = new Dog ('Hachiko', 'the same food as human', 'running on four legs', 'Woof');
hachiko.getName();
hachiko.getFood();
hachiko.speak();
hachiko.WhatItDoes();

class Bird extends Animal {
    constructor (name, food, move, sound, canFly){
        super (name, food, move, sound);
        this.canFly = canFly;
    }
    speak (){
        return console.log(`The bird is singing: ${this.sound}! ${this.sound}! ${this.sound}!`);
    }
    fly () {
        switch (this.canFly){
            case true: 
            return console.log(`The ${this.name} can fly.`)
            case false: 
            return console.log(`The ${this.name} can not fly.`)
            default:
            return console.log(`We dont know if the ${this.name} can fly.`)
        }
    }
}
const sparrow = new Bird ('Sparrow', 'seeds', 'flying', 'Tweet', true);
sparrow.getName();
sparrow.getFood();
sparrow.speak();
sparrow.WhatItDoes();
sparrow.fly();

const ostrich = new Bird ('Ostrich', 'grass', 'running on two legs', 'Wistle', false);
ostrich.getName();
ostrich.getFood();
ostrich.speak();
ostrich.WhatItDoes();
ostrich.fly();