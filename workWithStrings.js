const str = 'You will never walk alone';
const person = {
    firstName: 'Samuel',
    shortName: 'Sam',
    secondName: 'Gibson',
    age: 44,
    city: 'Houston',
    job: 'firefighter',
    durationOnWork: 20,
};

// concat

const aboutNamePerson = 'Hello, My name is ' + person.firstName +', but you can call me ' + person.shortName + '.';
console.log(aboutNamePerson);

const aboutAgePerson = 'As a ' + person.job + ' I work last ' + person.durationOnWork + ' years, and I\'m only ' + person.age + ' years old.'
console.log(aboutAgePerson); 

const strPlusNum = '10' + 10 - 10;
console.log(strPlusNum); 
console.log(typeof(strPlusNum)); 

const numPlusStr = 10 + '10';
console.log(numPlusStr); 
console.log(typeof(numPlusStr)); 

const numPlusString = 10 + ' - It\'s ten.';
console.log(numPlusString); 
console.log(typeof(numPlusString)); 

const sent = str + ' mister ' + person.secondName;
console.log(sent);

const sentence = `${str} mister ${person.secondName}`;
console.log(sentence);

const sentWithTern = `As a ${person.job} I work during ${(person.durationOnWork < 15) ?  person.durationOnWork + ' years old': 'the most interesing part of my life'}.`;
console.log(sentWithTern);

// Methodes

const findSumbolByIndex = str.charAt(4); // charAt
console.log(findSumbolByIndex);

const findSumbolByText = str.includes('will'); // includes
const findSumbolByNoText = !str.includes('will');
console.log(findSumbolByText);
console.log(findSumbolByNoText);

const findIndexBySymbol = str.indexOf('will'); // indexOf
console.log(findIndexBySymbol);

const changeUp = str.toUpperCase(); // toUpperCase
console.log(changeUp); 
const changeLow = str.toLowerCase(); // toLowerCase
console.log(changeLow);


console.log(str.slice(0, 3)); // slice
console.log(str.slice(-6));
console.log(str.slice(8));
console.log(str.slice(4, 8));
console.log(str.slice(-21));
const slicing =  str.slice(4,8);
console.log(slicing);
console.log(str);


const spliting = str.split(''); // split
console.log(spliting);
const spliting2 = str.split(' ');
console.log(spliting2);
const spliting3 = str.split('   ');
console.log(spliting3);
const newArray = [];
newArray.push(spliting, spliting2, spliting3);
console.log(newArray);


const matching = str.match('will'); // match
console.log(matching);
const matching2 = str.match(/[A-Z]/g);
console.log(matching2);

// replace
const replacing = str.replace('l', 'L'); // only the first
console.log(replacing);
const replacing1 = str.replace(/l/g, 'L'); // all 
console.log(replacing1)
const replacing2 = str.replace(/e/g, 'eeeeeee'); // all 
console.log(replacing2);

// trim
const srtinga = '        You           will          never        walk      alone      ';
const triming = srtinga.trim(); 
console.log(triming);
const triming2 = srtinga.trimEnd();
console.log(triming2);
const triming3 = srtinga.trimStart();
console.log(triming3);
const triming4 = srtinga.trimLeft();
console.log(triming4);
const triming5 = srtinga.trimRight();
console.log(triming5);

