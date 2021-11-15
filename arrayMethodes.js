const arrayWithNumbers = [2, 3, 4, 6, 8, 5, 1, 7];
const objectInArray = [
    { cityPopulation : 100000},
    {cityPopulation : 1000000},
    {cityPopulation : 500000},
    {cityPopulation : 600000},
    {cityPopulation : 250000},
    {cityPopulation : 100000000},
];

//sort

const sortArray = arrayWithNumbers.sort(
    (current, next) => {
        if (current < next){
            return -1;
        }
    }
);
console.log(sortArray);

arrayWithNumbers.sort(
    (current, next) => {
        if (current < next){
            return -1;
        }
    }
);
console.log(arrayWithNumbers);

arrayWithNumbers.sort(
    (current, next) => current - next
);
console.log(arrayWithNumbers);

//forEach

    let sum = 0;
    let mult = 1;
    arrayWithNumbers.forEach(
        (arrayEl, index) => {
            sum += arrayEl;
            mult *= arrayEl;
        }
    );
console.log(sum, mult);



// map

const updatedArrayWithMap = arrayWithNumbers.map((arrayEl, index) => {
    return arrayEl +10;
});
console.log(updatedArrayWithMap);

const updatedArrayWithMapFn = (arrayEl, index) => {
    return arrayEl + 10;
}

const updatedArrayWithFnMap = arrayWithNumbers.map(updatedArrayWithMapFn);
console.log(updatedArrayWithFnMap);

// filter

//arrayWithNumbers.filter((arrayEl) => arrayEl > 4); dont work cause need new array 
//console.log(arrayWithNumbers);

const filtredArray = arrayWithNumbers.filter((arrayEl) => arrayEl > 4);
console.log(filtredArray);

const filtredObjectInArray = objectInArray.filter ((item) => item.cityPopulation <= 500000);
console.log(filtredObjectInArray);

// reduce

const sumReduce = arrayWithNumbers.reduce(
    (acc, current) => acc +=current,
    0
);
console.log(sumReduce);

const filteredWithReduce = objectInArray.reduce((acc, item) => {
    if (item.cityPopulation <= 500000) {
        acc.push({
            cityPopulation: item.cityPopulation})
    }
    return acc;
}, []);
console.log(filteredWithReduce);



// join
const joining = arrayWithNumbers.join('');
console.log(joining); 


// // includes
const including = arrayWithNumbers.includes(1);
console.log(including); 

// indexOf
const  indexOfing= arrayWithNumbers.indexOf(8);
console.log(indexOfing); 

// slice
const  slicing= arrayWithNumbers.slice(0, 4);
console.log(slicing); 

const  slicing1= arrayWithNumbers.slice(4,6);
console.log(slicing1); 

// splice
const  splicing= arrayWithNumbers.splice(0, 2, 9);
console.log(splicing);
console.log(arrayWithNumbers); 

