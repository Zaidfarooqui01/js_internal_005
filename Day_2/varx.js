//let a = 23;
//const b = 42;
//var c = 78;
//d = 88;

let a="abc";
let b="";
let c=null;
let boolean=true;
let d;

console.log("a = ", a);
console.log("b = ", b);
console.log("c = ", c);
console.log("boolean = ", boolean);
console.log("d = ", d);
console.log(typeof(undefined));
console.log(typeof(null));
console.log(typeof(d));

console.log("-----------------------------");

let score = "33xyz";
console.log(typeof(score));
console.log(typeof score);

let sc=Number(score);
console.log(typeof(sc));
console.log("sc = ", sc);

console.log("---------------DAY 3-----------------")
function fun(n){
    return n*2;
}
let ch = fun(72);
console.log("ch = ", ch + "\n");

let arr = [1,2,3,4,5,"apple", "banana", ch];
console.log(arr);

let fruits = ["Apple", "Banana", "Lichi", "Mango", "guvava"];
for(let i=0; i <= fruits.length-1; i++){
    console.log("Index ", + i + " = " + fruits[i]);
}
fruits.pop("Papaya");
console.log(fruits);
fruits.unshift("Kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits.includes("Mango"));
console.log(fruits.indexOf("Banana"));

for(let val of fruits){
    console.log(val);
}

let nums = [10, 20, 30 , 40];
let res = nums.filter(n => n>20);
console.log(res);

console.log("-----------------------------\n");
let num = [2,4,6,8];
let doubled = num.map(i => i*2);
console.log(doubled);

let numbers = [10,25,30,5,60];
console.log(numbers.filter(n => n>20));

console.log("Sum of num[] = ",num.reduce((acc, val)=> acc +val, 0));