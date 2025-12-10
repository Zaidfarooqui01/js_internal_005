// Mini Task Day 3
// Task 1
const marks = [80, 90, 70, 85, 95];
let sum = marks.reduce((acc, val)=> acc+val, 0);
let avg = sum/marks.length;
console.log("Average of "+marks+" is = "+avg);

console.log("---------------------\n");

// Task 2
let evenNumbers = marks.filter(n=>n%2===0);
console.log("Evens = ", evenNumbers);
console.log("---------------------\n");

// Task 3
let cart = {
    item:"Laptop",
    price:45000,
    quantity:2
};
let bill = cart.price*cart.quantity;
console.log("Bill = ", bill);
console.log("---------------------\n");

// Task 4 -> already done

// Task 5
let user={
    name:"Zaid",
    age:21,
    course:"JS"
};
// Object to JSON
let userJson = JSON.stringify(user);
console.log("User as JSON:", userJson);
// JSON to Object
let userObject = JSON.parse(userJson);
console.log("User as Object", userObject);
console.log("---------------------\n");

// Task 6:
let arr = [10,40,25,80,15];
let max = arr[0];
for(val of arr){
    if(val > max){
        max = val;
    }
}
console.log("Max Element = ", max);
console.log("---------------------\n");

// Task 7
let names = ["zaid", "shoaib", "ayaan"];
let namesInBlock = names.map(arr => arr.toUpperCase());
console.log(namesInBlock);