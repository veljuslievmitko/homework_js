
console.log(`homework 1`)
var numberOfPhones = 30;
var price = 119.95;
var taxrate = 5/100;
var totalPrice = numberOfPhones * (price +  price * taxrate);
console.log(`price for all ${numberOfPhones} with price ${price} and tax rate 5% is ${totalPrice}$`)


console.log(`homework 2`)
console.log(`exersice 1`)
function TypeOfParametar(parametar) {
    let x = parametar
    console.log(typeof x);
}
TypeOfParametar ({});
TypeOfParametar (true);
TypeOfParametar(1);
TypeOfParametar(`mitko_veljusliev`);
TypeOfParametar(undefined);


console.log(`exercise 2`);

function dogYear(x,y) {
    let yearOfDog = x*7
    let yearOfHuman = y / 7
    // console.log(yearOfDog)

    if (x == 0) {
        console.log(`the human is ${yearOfHuman} years old, and the dog is ${y} years old`);
    } else {console.log(`The dog is  ${yearOfDog} old, and  the human is ${x} years old`)};
}
dogYear(0,21);
dogYear(2,0);


console.log (`exercise 3`);
let have = prompt(`how much money you have on account`)
let want =prompt(`how  much money you want to withdraw`)

function atm(){
    if( want > have) {
        console.log(`you can withdraw ${want} money`)
    } else {
        console.log(`you can not withdraw money because you have just ${have} money left`)
    }
}
atm()