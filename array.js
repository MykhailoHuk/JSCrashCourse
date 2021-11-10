let arr = ['Sainz' , 44, {isMainHero: true}];
const ar = new Array();
let emptyArr = [];

console.log(arr);
console.log(arr[2]);
console.log(ar);
console.log(emptyArr);

ar.push(1);
ar.push(1);
ar.push(2);

console.log(ar);

emptyArr.push('Alfredo');
emptyArr.push('Barcelona');
emptyArr.push(33);
console.log(emptyArr);


emptyArr.pop();
console.log(emptyArr);
emptyArr.pop();
console.log(emptyArr);

emptyArr.unshift({isSpanish:true});
emptyArr.unshift('Barcelona');
console.log(emptyArr);

emptyArr.shift();
console.log(emptyArr);

let fullArray = emptyArr.concat(arr);
console.log(fullArray);

//======================================================
// Using arrays
//======================================================

const clientsName = [
    {client: 'Mike'},
    {client: 'Eddie'},
    {client: 'Gary'},
];
function getClient (name) {
   console.log("Dear, " + name + "!");
}
getClient(clientsName[0].client);
getClient(clientsName[1].client);
getClient(clientsName[2].client);

function addClientName(objName, arrName) {
    arrName.push({"client" : objName});
}
addClientName('Bob', clientsName);
console.log(clientsName);