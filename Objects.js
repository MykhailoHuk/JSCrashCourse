const f1 = {};
const newF1Team = new Object();

const McLarenF1Team = {
    director : 'Zak Braun',
    firstPilot : 'Lando Norris',
    secondPilot : 'Daniel Ricciardo',
    founder : 'Bruce McLaren', 
    fromCountry : 'UK',
    isParticipant : true 
};

console.log(f1);
console.log(newF1Team);
console.log(McLarenF1Team);

// =======================================================================

McLarenF1Team.lastWin = 2021;
McLarenF1Team['fullName'] =() => console.log('McLAREN FORMULA 1 TEAM');
console.log(McLarenF1Team);
console.log(McLarenF1Team.fullName());

McLarenF1Team.isWinner = true;
console.log(McLarenF1Team);

McLarenF1Team.isWinner = 'No, only the third place';
console.log(McLarenF1Team);

delete McLarenF1Team.isWinner;
console.log(McLarenF1Team);

console.log(McLarenF1Team.valueOf());
console.log(McLarenF1Team.hasOwnProperty('isParticipant'));
console.log(McLarenF1Team.valueOf(McLarenF1Team.toString));


const WilliamsTeam = Object.assign(McLarenF1Team);
console.log(WilliamsTeam);

const WilliamsF1Team = Object.create(McLarenF1Team);
WilliamsF1Team.fromCountry = 'UK';
WilliamsF1Team.isParticipant = true;
console.log(WilliamsF1Team);
for (const [key, value] of Object.entries(WilliamsF1Team)){
    console.log(`${key}:${value}`);
} 

Object.freeze(McLarenF1Team);
McLarenF1Team.isParticipant=false;
console.log(McLarenF1Team);
console.log(Object.isExtensible(McLarenF1Team));
console.log(Object.isFrozen(McLarenF1Team));

console.log(Object.keys(McLarenF1Team));
