//function named allIndexOf that takes in two arguments.
// 1st should be the array to search
//the second should be the value you want to search for
//if item does not exist in the provided array return an empty array
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

//allIndexesOf(fruits, "apple") should return the array [0, 3]
//allIndexesOf(fruits, "guava") should return the array []
//allIndexesOf(fruits, "pineapple") should return [4]

function allIndexOf(arg1, arg2) {
    var index = fruits.indexOf(arg1)
}


//function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value you wish to remove
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];


//=======//
// Write a function named first() that returns only the first element of an array
var food = ["popcorn", "pizza", "hamburgers", "muffins"];
function first(x) {
    x === food;
    return x[0];
}
//function n named getLongestString that takes in an array of strings
// and returns the longest string of that array
var longest = ["cat", "puppy", "cows" ,"snakes" , "doggggooooo"];

function longestString(arr) {
    var long = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > long.length) {
            long = arr[i];
        }
    }
    return long;
}
console.log(longestString(longest));
//Write a function named getShortestString that takes in an array of strings and
// returns the shortest string in that array.
var shortest = ["cats", "puppy", "cows" ,"snakes" , "doggggooooo", "bee"];

function getShortestString(arr) {
    var short = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length < short.length) {
            short = arr[i];
        }
    }
    return short;
}
console.log(getShortestString(shortest));

//  Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.