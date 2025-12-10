// Part B

// 16: Check if a number is prime
let prime = 33;
let isPrime = true;
if (prime < 2) {
    console.log(`${prime} is not a prime!`);
} else {
    for (let i = prime; i >= prime / 2; i--) {
        if (prime % i === 0) {
            isPrime = false;
        } else {
            isPrime = true;
        }
    }
}
if (isPrime) {
    console.log(`${prime} is a prime number.`);
} else {
    console.log(`${prime} is not a prime number.`);
}
console.log("-----------------------------");

// 17: Calculate Sum of digits of a number
let num = 232;
let arr = num.toString().split('').map(Number) || []; // Converting number to array of digits
let sumofdigits = 0;
for (i of arr) {
    sumofdigits += i;
}
console.log("Sum of digits of", num, "is:", sumofdigits);
console.log("-----------------------------");

// 18: To Reverse a string 
let str = "United Group of Institution";
console.log("Original string = ", str);
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
console.log("Reversed String = ", rev);
console.log("------------------------------");

// 19: Grades
// let user_marks = prompt("Enter Your Marks: ");
// let marks = parseInt(user_marks);
// We cannot use prompt in Node.js environment, so directly assigning a value
let marks = 85;
if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("Please enter valid marks between 0 and 100.");
} else {
    if (marks >= 90) {
        console.log("Grade A");
    } else if (marks >= 75 && marks < 90) {
        console.log("Grade B");
    } else if (marks >= 50 && marks < 75) {
        console.log("Grade C");
    } else {
        console.log("Fail");
    }
}

console.log("-----------------------------");

// 20: mathematical function

function calculate_fun(x, y, o){
    if(o === "+"){
        console.log("Addition",x + "+" + y + "=", x+y);
    }else if(o === "-"){
        console.log("Subtraction",x + "-" + y + "=", x-y);
    }else{
        console.log("Division",x + "/" + y + "=", x/y);
    }
}
calculate_fun(10,5,"+");
calculate_fun(10,5,"-");
calculate_fun(10,5,"/");
console.log("-----------------------------");

// 21: Count Wovels
let original_letter = "United";
let letter = original_letter.toLowerCase();
let count_vowel = 0;
for(i of letter){
    if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
        count_vowel++;
    }
}
console.log("Wovels in "+ letter + "=  " + count_vowel);

// Done 21 out of 25