const user = { name: "Ishaan", age: 22 };

console.log("Ishaan Gaba");
console.log(user.name);

function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(1, 3));

// fat arrow function
const diff = (a: number, b: number): number => {
  return a - b;
};

console.log(diff(5, 3));

// type annotations

//number
const num: number = 5;
console.log(num.toString());

//string
const firstName: string = "Ishaan";
const lastName: string = "Gaba";
console.log(firstName + lastName);

//boolean datatypes

let isFlag: boolean = false;
let isDone: boolean = true;

// hasStarted = 1;   //cant assign number to boolean

// write a function iseven number as a parameter and return true if even else false
function isEven(a: number): boolean {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));

//BIGINT  - beyond 2^53
let num1: bigint = 9007199254740991n;
console.log(num1);

let num2: bigint = BigInt("90071992547409913");
console.log(num2);

//Any Type
let vr: any = 1;
vr = "hello";

//unknown type
let vu: unknown = 1;
vu = "hello";
vu = true;

//function
const greet = (name: string): string => {
  return "Hello " + name;
};
greet("Ishaan Gaba");

// default and optional parameters

//arrays
const numbers: number[] = [1, 2, 3, 4, 5];
const numbers2: number[] = new Array(1, 2, 3, 4, 5);
const names: string[] = Array.of("ishaan", "gaba", "gaba");

console.log(names[1]);

const arr: number[] = [1, 2, 3, 4, 5];

const newArr: number[] = arr.map((num) => num * 2);
console.log(newArr);

//filter
const filteredArr: number[] = arr.filter((num) => num > 2);
console.log(filteredArr);

//interfaces and classes
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const userObj: User = new UserAccount("Ishaan", 1);
