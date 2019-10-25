"use strict";

function sum(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
console.log(sum(2,2));
console.log(sum(3,4));
//write a function to find the area of a triangle
//function takes in 3 parameters
function triangleArea (a,b,c) {
    var half =(a+b+c)/2;
    //find the area of this
    var area = Math.sqrt(half * (half-a) * (half-b) * (half-c));
    //function returns the area
    return area;
}
console.log(triangleArea(5,6.7));

//write a function that returns the string hi
function hi() {
    return "hi";
}
console.log(sayHi());
// write a function that returns hello and a name
function Hello(Name) {
    return "Hello" + Name + ".";
}
console.log(Hello (Lauren));
//write a function that returns the first element of an array

function firstElement(arr) {
    return arr [0];
}
console.log(1);
//write a function that returns the area of a equilateral triangle
function equilateralTriangleArea(a, b, c) {
    //you can use the previous function of triangle area
    return triangleArea(num, num, num);
}
console.log(equilateralTriangleArea(3));
console.log(triangleArea(3, 3, 3));
//write a function that concatenates 3 strings together
function concatenateString(a,b, c) {
    return a + " " + b  +  " " + c;
}
console.log (concatenateString("Good", "morning", "Deimos"));
//function that takes in a string and returns the string with all upper case
function upperCase(string) {
    return string.toUpperCase();

    // var str= "Hello World";
    // var str = str.toUpperCase();
}
console.log(upperCase(Bill));
//write a function that calculates a circles area when provided the diameter
//area of circle is pi times radius squared
function circleArea(a) {
    var radius = d / 2;
    return Math.PI * Math.pow(radius, 2);
}
console.log(circleArea(5));

//Write a function that returns the perimeter of a quadrilateral
//perimeter is 4sides added together
function perimeterQuadrilateral (s1, s2, s3, s4){
return s1 + s2 + s3 + s4;
}
console.log(perimeterQuadrilateral(3,2,5,7));

//write a function that finds a type of something
function checkType (x) {
    return typeof (x);
}

//write function that returns true only when passed a positive even number
//if even use % to determine
function isEvenPositiveNum(num) {
    return num % 2 ===0 && num > 0;
}
console.log (isEvenPositiveNum(2));
console.log (isEvenPositiveNum(8));
//function that prompts a user for a number and returns true if it is greater than 5
function greaterThanFive() {
    var userNumber = parseInt(prompt("Please enter a number"));
    return userNumber > 5;
}
console.log(greaterThanFive());

//returns message "Hello there stranger", alert the return from this function,
// refactor it so it returns hello there and concatenated to argument
//prompt the user to call the function and alert the return
//refactor so that the function stranger is the default value for the parameter

function helloThere(string = "stranger") {
    return 'Hello there, ' + string + '.';
}
var promptTheUser = prompt("Input string, plox. ")
alert(helloThere(promptTheUser));
//function that accepts an array and returns the length of that array
//array is a list

function arrayLength (array){
    return array.length;
}
console.log(arrayLength([1 ,2, 3 ,4]));

//function that quotient of two numbers, ONLY when passed two numbers it should return false in all all other cases
//quotient is dividing two numbers together
function quotient(num1, num2) {
   if (typeof num1 === "number" && typeof num2 === "number") {
       return num1 / num2;
   } else {
       return false;
   }
}
console.log(quotient(21, 7));
//returns back as false
console.log(quotient(21, "7"));
//function that takes in an array that has a length of 5. console.log each element of the array

function logArray(Arrayinput) {
    console.log(Arrayinput [1]);
    console.log(Arrayinput [2]);
    console.log(Arrayinput [3]);
    console.log(Arrayinput [4]);
    console.log(Arrayinput [5]);
}
logArray(Arrayinput[1,2,3,4,5]);

//function that takes in an input and returns true if the input is a string at least 8 characters long
//it should return false for all other input
function eightCharatersLong(input) {
    if (typeof input === 'string' && input.length >= 8){
        return true;
    }
    else {
        return false;
    }
}

console.log(eightCharatersLong("Helloooo"));
console.log(eightCharatersLong("Helllo"));
console.log(eightCharatersLong(888888888));

//that takes in a float point number, and returns a number rounded down. return false for all inputs that aren't numbers
//math.floor rounds down a number
function floatingNumber(num) {
    if (typeof num === 'number' && !isNaN(num)){
        return Math.floor(num);
    }
    else {
        return false;
    }
}
console.log(floatingNumber(3.67));

//function that counts from 1 up to the number that the user passes in. ex. if input is 10 then it should log numbers 1-10
function counting(x) {
    for (var i = 1; i < x; i++)
       console.log(i);
    return "Done counting";
}
//function createPersonObject that takes in name (string) and and age(num) and returns a person object containing both
    //ex. createPersonObject ('hannah", 47)
function createPersonObject(name, age) {
    var person = {
        name: name,
        age: age
    };
    return person;
}

console.log(createPersonObject("Hannah", 27));

//write fizzbuzz. divisable by 3 fizz, divisable by 5 buzz, divisable by both fizzbuzz
function fizzBuzz(num) {
    for (var i= 1; i <= num; i++){
        if (i % 5 === 0 && i % 3 === 0){
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0){
            console.log("Buzz");
        }
        else if (i % 3 === 0){
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}
//function that returns the number 5 but only when passed the string "five"
function returnFive(num) {
    if (num === "five" || num === "Five"){
        return 5;
    }
    // else {
    //     return "Write a different number"
    // }
}

console.log(returnFive("Five"));