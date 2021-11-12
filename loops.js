// For

for (let i = 0; i < 5; i++ ){
    console.log(i);
}

const testArray = ['A', 'B', 'C', 'D', 'E', 'G'];


// loops with arrays

function loopArray (arr){
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
    }
}
loopArray(testArray);

const words = ['May', 'the', 'Force', 'be', 'with', 'you'];
let result = '';
function wordArrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ' ';
      }
    console.log(result);
}
wordArrays(words);

const reverseWords = ['you', 'with', 'be', 'Force', 'the', 'May'];
let reverseResult = '';
function reverseArrays(arr) {
    for (let i = arr.length -1; i >= 0; i--) {
        reverseResult += arr[i] + ' ';
      }
    console.log(reverseResult);
}
reverseArrays(reverseWords);

// loops with objects

const testObject = {
    firstName : 'Michael',
    secondName : 'Carleone',
    isBoss : true,
    isCitizen : 'New York'
}

function loopObject (obj) {
    for (let key in obj) {
        console.log(obj[key]);        
    }
}
loopObject(testObject);

function loopObject2(obj) {
    for (let key in obj) {
        console.log(key);
      }
}
loopObject2(testObject);

// While

let n = 5;
while (n>0){
    console.log(n);
    n--;
}

const numbersArray = [1,2,3,4,5,6,7,8,9,10];
f= 0;
let res = 0;
while (f<numbersArray.length) {
    res = res + numbersArray[f];
    f++;
}
console.log(res);

const anotherArray = ['Be', 'my', 'guest'];
let res2 = '';
f2=0;
while (f2<anotherArray.length) {
    res2 += anotherArray[f2] + ' ';
    f2++;
}
console.log(res2);

let x=0;
do {
    console.log('Hey');
    x++;
} while (x<=8)

// Using loops

const persons = [
    { 
        name: 'Bob',
        age: 27,
    },
    { 
        name: 'Gary',
        age: 44,
    },{ 
        name: 'John',
        age: 54,
    },{ 
        name: 'Edward',
        age: 37,
    },
    { 
        name: 'Amy',
        age: 22,
    },{ 
        name: 'Alice',
        age: 55,
    }
]
function getInfo(personsName, personsAge) {
    return `${personsName} is ${personsAge} years old.`;
}
function getAllInfo(array) {
    for (let i = 0; i < array.length; i++) {
       console.log(getInfo(array[i].name, array[i].age));
    }
}
getAllInfo(persons);