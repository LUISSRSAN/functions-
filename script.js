'use strict';

let hadDriverLicense = false ; 
const passTest = true;

if (hasDriverLicense){
    console.log("I can drive");
}


function greeting(){
    console.log("Hello I'm Midnight");

}
greeting();
greeting();
function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

let appleJuice = fruitProcessor(5,0);
console.log(appleJuice);