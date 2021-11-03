let a = 2;

let sum = a += 4; 
let minus = a -= 5; 
let mult = a *= 2;
let div = a /= 4;
let per = a %= 4;
let sqr = a **= 2; 

console.log("sum:" + sum);
console.log("minus:" + minus);
console.log("mult:" + mult);
console.log("div:" + div);
console.log("per:" + per);
console.log("sqr:" + sqr);

// =======================================================================

let b = 4;
let c = '4';
let d = 8;
console.log("b=" + b  +  typeof b);
console.log("c=" + c +  typeof c);
console.log("d=" + d  +  typeof d);

console.log("b==c:" + (b==c));
console.log("b===c:" + (b===c));

console.log("b!=c:" + (b!=c));
console.log("b!==c:" + (b!==c));

console.log("b>d:" + (b>d));
console.log("b<d:" + (b<d));
console.log("b>=d:" + (b>=d));
console.log("b<=d:" + (b<=d));

// =======================================================================

const i = 10;
// const i = 8;
let res = i === 10
? i * i
: "incorrect number";
console.log(res);

const y = 10;
const  x = 5;
const z = 7;
let test1 = z<y && z>x
? z * z 
: "Error :)";
console.log(test1);

const r = 4;
let test2 = r<y || r>x
? r * r 
: "Error :)";
console.log(test2);

// =======================================================================

// let num = 10;
// let num = 9;
let num = 11;
if (num > 10) {
    console.log("number is bigger than 10")
}
else if (num < 10) {
    console.log("number is smaller than 10")
}
else {
    console.log("number is equal to 10")
}

// =======================================================================

// let month = 9;
// let month = 10;
// let month = 11;
let month = 12;
switch (month){
    case (month=9): {
        console.log("You picked September");
        break;
    }
    case (month=10): {
        console.log("You picked October");
        break;
    }
    case (month=11): {
        console.log("You picked November");
        break;
    }
    default: {
        console.log("You picked not Autumn months");
    }
}