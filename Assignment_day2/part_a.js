// Assignment Day 2 - Part A
// 1: Sum of two numbers
let a = 10;
let b = 20;
console.log("Sum of a and b is: ", a + b);

//2: Greeting message
let name = "Zaid";
console.log(`Hello, ${name}! Welcome to JavaScript programming.`);

// 3: Check even or odd
let arr = [1, 2, 3, 4, 5];
for(i of arr){
    if(i % 2 === 0){
        console.log(i, "is even");
    }else{
        console.log(i, "is odd");
    }
}

console.log("-----------------------------");

// 4: Celcius to Fahrenheit conversion
let cel = 98;
let far = (cel * 9/5) + 32;
console.log("Temperature in Fahrenheit is: ", far);
console.log("-----------------------------");

// 5: Find the largest number among three numbers
let num1 = 15, num2 = 20, num3 = 5;
let largest;
if(num1 >= num2 && num1 >= num3){
    largest = num1;
}
else if(num2 >= num1 && num2 >= num3){
    largest = num2;
}   
else{
    largest = num3;
}
console.log("The Largest number among", num1, ",", num2, "and", num3, "is:", largest);
console.log("-----------------------------");

// 6: Count the length of a string
let str = "Hello World";
let count = 0;
for(i of str){
    count++;
}
console.log("The length of the string ", str, "is:", count);
console.log("-----------------------------");

// 7: Toggle a boolean value
let boolean = true;
if(boolean){
    boolean = false;
    console.log("The value is now:", boolean);
}
console.log("-----------------------------");

// 8: Concatenate two strings
let str1 = "JavaScript";
let str2 = "Programming";
let str12 = str1 + " " + str2;
console.log("Concatenated String:", str12);
console.log("-----------------------------");

// 9: Positive, Negative or Zero
let numb = 7;
if(numb > 0){
    console.log(numb, "is a positive number.");
}else if(numb < 0){
    console.log(numb, "is a negative number.");
}else{
    console.log("The number is zero.");
}
console.log("-----------------------------");

// 10: Var let const demonstration
//let a = 23;
//const b = 42;
//var c = 78;
//d = 88;

// 11: Print multiplication table of a number
let tableOf5 = "";
for(let i = 1; i <= 10; i++){
    tableOf5 += `5 x ${i} = ${5 * i}\n`;
}
console.log("Table of 5:\n", tableOf5);
console.log("-----------------------------");


// 12: Sum of First 10 Natural Numbers
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}
console.log("Sum of First 10 Natural Numbers is:", sum);

// 13: Switch case for days of the week
let  day = 3;
switch(day){
    case 1:
        console.log("1: " + "Sunday");
        break;
    case 2:
        console.log("2: " + "Monday");
        break;
    case 3:
        console.log("3: " + "Tuesday");
        break;
    case 4:
        console.log("4: " + "Wednesday");
        break;
    case 5:
        console.log("5: " + "Thursday");
        break;
    case 6:
        console.log("6: " + "Friday");
        break;
    case 7:
        console.log("7: " + "Saturday");
        break;
    default:
        console.log("Invalid day number!");
} 
console.log("-----------------------------");

// 14: Factorial of a number

function fact(n){
    if(n===0 || n===1){
        return 1;
    }
    return n*fact(n-1);
}
let factn = 5;
console.log("Factorial of", factn, "is:", fact(factn));
console.log("-----------------------------");

// 15: Check voting eligibility
let age = 17;
if(age >= 18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}