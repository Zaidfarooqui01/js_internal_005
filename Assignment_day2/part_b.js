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
console.log("Wovels in "+ letter + " =  " + count_vowel);

// 22: Fibonacci series

let n = 5;
let first = 0, second = 1;
if(n>=1) console.log(first);
if(n>=2) console.log(second);
for(let i=2; i<=n; i++){
    let next = first+second;
    first = second;
    second = next;
    console.log(next);
    //Process.stdout.write(next);
}
console.log("-----------------------------\n");

// 23: to retuen min and max from an array

function find_min_max(arr){
    if(arr.length === 0){
        return {min:undefined, max:undefined}
    }
    let min = arr[0];
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
    }
    return {min: min, max:max}
}
let nums = [2, 43, 56, 23, 5, 0];
console.log(find_min_max(nums));
console.log("-----------------------------\n");

// 24: Switch case to built Simple Menu Program

function add(a,b){return a+b}
function sub(a,b){return a-b}
function mul(a,b){return a*b}
function div(a,b){return a/b}
let fun = 'm';
let a = 5, b = 7;
console.log("Use a to Add, s to Subtract, m to Multiply, d to Divide");
switch(fun){
    case "a":
        console.log("a + b = ",add(a,b));
        break;
    case "s":
        console.log("a - b = ",sub(a,b));
        break;
    case "m":
        console.log("a * b = ",mul(a,b));
        break;
    case "d":
        console.log("a / b = ",div(a,b));
        break;
    default:
        console.log("Enter the Correct input !!");
}
console.log("-----------------------------\n");

// 25: To check Armstrong Number

function check_arm(arm){
    let arm_sum = 0;
    let isarmstrong = true;
    let arm_arr = arm.toString().split('').map(Number) || [];
    let pow = arm_arr.length;
    for(val of arm_arr){
        arm_sum += val**pow;
    }
    if(arm === arm_sum){
        isarmstrong = true;
    }else{
        isarmstrong = false
    }
    return isarmstrong;
}
let check_armstrong = check_arm(153);
if(check_armstrong){
    console.log("The Number is Armstrong!");
}else{
    console.log("The Number is not Armstrong");
}