"use strict";
//callback function is a function that you pass into a method (the method requires a function)
/*********************************************
 *              .map
 ******************************************** */

const numbers = [1,2,3,4,5,6,7,8,9,10];

//old way how to do things
// let newArray = [];
//  numbers.forEach(function (num) {
//    newArray.push(num)
// });
// console.log(newArray);

//TO DO TOGETHER: Let's map through the array of number and add 1 to each
// element. Console log the new copy of the array.

//using arrow functtion
let newArray = numbers.map((num) => num *3);

console.log(newArray);

//using regular
// let newArray = numbers.map(function (num) {
//     return num * 2;
// });
// console.log(newArray);


//TO DO: Map through the new array of numbers and this time multiply each
// element by 3. Console log the new copy.
const newNumbers = [2,4,6,8,10,12,14];
let array = newNumbers.map((num) => num * 3);
console.log(array);


/*********************************************
 *              .filter
 ******************************************** */
const binary = [1,1,1,1,0,0,1,1,1,1];

// TO DO TOGETHER: Let's filter through our binary and return all the true
// values. We'll store the new array in a variable named 'ones'

const ones = binary.filter((num) => num == true);

console.log(ones);

// const ones = binary.filter(function (num) {
//    return num == true;
// });
// console.log(ones);

// TO DO: filter through binary again and this time, return all the false
// values.

// const zero = binary.filter((num) => num == false);

const zero = binary.filter(function (num) {
    return num == false;
});
console.log(zero);

const fruitsAndVeggies = [
    {
        name: "banana",
        type: "fruit"
    },
    {
        name: "broccoli",
        type: "vegetable"
    },
    {
        name: "tomato",
        type: "fruit"
    },
    {
        name: "carrot",
        type: "vegetable"
    },
    {
        name: "apple",
        type: "fruit"
    },
    {
        name: "spinach",
        type: "vegetable"
    },
];


// TO DO: filter through the array of objects and return all fruit type
// objects.
const fruits = fruitsAndVeggies.filter(function (fruit) {

        return fruit.type === "fruit";

});

console.log(fruits);

// TO DO: filter through the array of objects and return all vegetable type
// objects.
const veggies = fruitsAndVeggies.filter(function (veggie) {

    return veggie.type === "vegetable";

});
console.log(veggies);


/*********************************************
 *              .reduce
 ******************************************** */
// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) => {
//     return accumulation + currentNumber;
// }, 10);
//accumulation is 10
//add 1
//accumulation is 11
//add 2
//accumulation is 13
//add 3
// accumulation is 16
//add 4
//accumulation is 20
//add 5
//final accumulation 25

// TO DO TOGETHER: Let's reduce our original numbers Array into one single
// value.

const numbersArray = [1, 2, 3, 4, 5];

//accumulation is the counter
//currentnumer is the element
const sum = numbers.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber;
}, 0);

// TO DO: Using .reduce, subtract all numbers in the numbers Array from a
// starting point of 100.

const differance = numbersArray.reduce( function (total, currentNum) {
    return total - currentNum;
},100);
console.log(differance);
// const differance = numbersArray.reduce(function (total, currentNum) {
//     return total - currentNum
// },100);
// console.log(differance);



var shoppingCarts = [
    {
        apples: 8,
        bananas: 2,
        oranges: 4,
        grapes: 24
    }, {
        apples: 3,
        bananas: 6,
        oranges: 8,
        grapes: 12
    } , {
        apples: 0,
        bananas: 12,
        oranges: 0,
        grapes: 0
    } , {
        apples: 4,
        bananas: 0,
        oranges: 12,
        grapes: 10
    }
];

// TO DO: Using .reduce, return the total number of apples.

const totatlApples = shoppingCarts.reduce( function (total, cart) {
    return total + cart.apples;
},0);
console.log(totatlApples);



const colors = ['red','orange','red','blue','blue','green','red'];

// TO DO: Count the number of times a color appears in this Array. Hint:
// your initial value should be an empty object.
const colorCount = colors.reduce(function (colorCount, color) {
    if (typeof colorCount[color] === "undefined"){
        colorCount[color] = 1;
    }else{
        colorCount[color] +=1;
    }
    return colorCount;
},{});
console.log(colorCount);


const lyrics = ['we','all','live','in','a','yellow','submarine'];

//TO DO TOGETHER: Using reduce, let's turn this into a string.
const oneLine = lyrics.reduce(function (currentString,word) {
    //combine all of it to a string
    return `${currentString} ${word}`
}, "");
console.log(oneLine);

// Bonus: Create an Array of all the unique fur colors!
var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

