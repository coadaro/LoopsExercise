//1
for (i = 1; i <= 7; i++){
    console.log(i);
};

//2
for (i = 0; i <= 25; i += 4){
    console.log(i);
};

//3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

//3b
for (friends of wizards){
    console.log(friends);
};

//4a
let harryPotterMovies = 0;

//4b
while (harryPotterMovies < 8){
    harryPotterMovies++;
};

//4c
console.log(harryPotterMovies);

//bonus
//5a
const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];

//5b
for (list of hogwartsHouses){
    for (letters of list){
        console.log(letters);
    };
}

//6a
const quote = [
    `yer`,
    `A`,
    `Wizard`,
    `Harry`
];

//6b
// console.log(...quote);
//or
let magicQuote = ``;
for (i = 0; i < quote.length; i++) {
    magicQuote += ` ${quote[i]}`
};
magicQuote = magicQuote.trim();
console.log(magicQuote);

//7
//question inspired by fizzbuzz
for (i=1; i<=25; i++){
    if (i%3 === 0 && i%5 ===0){
        console.log(`Expecto Patronum`);
    } else if (i%3 === 0){
        console.log(`Expecto`);
    } else if (i%5 === 0){
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}