// Part B

// 16: Check if a number is prime
let prime = 33;
let isPrime = true;
if(prime < 2){
    console.log(`${prime} is not a prime!`);
}else{
    for(let i = prime; i >= prime/2; i--){
        if(prime % i === 0){
            isPrime = false;
        }else{
            isPrime = true;
        }
    }
} 
if(isPrime){
    console.log(`${prime} is a prime number.`);
}else{
    console.log(`${prime} is not a prime number.`);
}
console.log("-----------------------------");

// 17: Calculate Sum of digits of a number
let num = 232;
let arr = num.toString().split('').map(Number) || []; // Converting number to array of digits
let sumofdigits = 0;
for(i of arr){
    sumofdigits += i;
}
console.log("Sum of digits of", num, "is:", sumofdigits);
console.log("-----------------------------");

