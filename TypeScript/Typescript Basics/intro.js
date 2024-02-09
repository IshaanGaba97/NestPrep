var user = { name: "Ishaan", age: 22 };
console.log("Ishaan Gaba");
console.log(user.name);
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 3));
// fat arrow function
var diff = function (a, b) {
    return a - b;
};
console.log(diff(5, 3));
// type annotations
//number
var num = 5;
console.log(num.toString());
//string
var firstName = "Ishaan";
var lastName = "Gaba";
console.log(firstName + lastName);
//boolean datatypes
var isFlag = false;
var isDone = true;
// hasStarted = 1;   //cant assign number to boolean
// write a function iseven number as a parameter and return true if even else false
function isEven(a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(4));
//BIGINT  - beyond 2^53
// let num1: bigint = 9007199254740991n;
// console.log(num1);
// let num2: bigint = BigInt("90071992547409913");
// console.log(num2);
//Any Type
var vr = 1;
vr = "hello";
//unknown type
var vu = 1;
vu = "hello";
vu = true;
//function
var greet = function (name) {
    return "Hello " + name;
};
greet("Ishaan Gaba");
// default and optional parameters
//arrays
var numbers = [1, 2, 3, 4, 5];
var numbers2 = new Array(1, 2, 3, 4, 5);
var names = Array.of('ishaan', 'gaba', 'gaba');
console.log(names[1]);
//map 
var arr = [1, 2, 3, 4, 5];
var newArr = arr.map(function (num) { return num * 2; });
console.log(newArr);
