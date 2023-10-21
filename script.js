// A Multi-Paradigm dynamic general purpose language designed for the web

// Multi-Paradigm Language
// - Event-driven: Respond to events
// - Functional: Pure functions, first-class function
// - Object-oriented: Custom objects with inheritance
// -Imperative: Specify logic & control
// Declarative: Specify desired output

// JS is Evolving
// - New versions ~ yearly

// JS engine
// - Executes code in the browser
// - Just-in time- compilation

// Primitive Types

// - Number 25, 10.42

// - BigInt BigInt() max out at 2^53-1
// not used as much

// - Booleans true or false

// - String 'hello', "world"

// - Symbol Symbol('description')
// represent unique values
// most commonly used with objects

//  - Null must be assigned and has no value

// - Undefined value has not been set

let num = 10;

console.log(num);

num = 20;
console.log(num);
console.log("====================================================")

let num2 = 10.8

console.log(Math.floor(num2));// rounds down
console.log(Math.round(num2));// rounds to closest whole number
console.log(Math.random(num2));// random # between 0 and 1
console.log("==========================================")

let num3 = 10.5;
let strNum = '10px';
console.log(Number(strNum));// Constructor function that turns string back into a number
console.log(parseInt(strNum));// Parses out strings from the integer
console.log("================================================")

let  num4 = 10.5;
console.log(num4 + 10);
console.log(num4 < 10);
console.log(num4 > 10);
console.log(num4 % 10);
console.log(num4 === 10);
console.log(num4 <= 10);
console.log(num4 >= 10);
console.log(Math.pow(2,4))//this works as an exponent. 2 is the base and 4 is the exponent
console.log(num * "a"); // Will print NaN (not a number)
console.log(Infinity);
console.log(-Infinity);
console.log(typeof 100n);//shows what your data type is
console.log("================================================")

let str = 'abcd';
console.log(str === 'abcd');
console.log('hello\nworld') //this prints on a new line

console.log("This is a very \long string");// test this later

console.log(str[1]) // index just like an array
console.log(str.charAt(1)) // function that indexes just like above
console.log(str.startsWith("e")); // Starts with function
console.log(str.endsWith("d")); // Ends with function
console.log(str.includes("e")); // Includes element function
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.substring(1));// starts at index 1 
console.log(str.slice(1,3));// starts at 1 ends at 3
console.log(str.padStart(10,"-"));// Takes in a count, minimum size
console.log(str.padEnd(10,"-"));


let str1 = "             abdt"
console.log(str1.trim());//trims white space
// also a trim start and trim end function

let str2 = 'a,b,c,d';
console.log(str.split(''));
console.log("=================================================")

// Objects 
const person = {
    name: "Alex",
    course: "FrontendExpert",  
};
console.log(person);
console.log(person.name);

const map = new Map(); // keys of Map can be of any type not just restricted to strings and symbols
map.set(456, 'hello');
map.set(123,'world');
console.log(map.size);

const set = new Set();
set.add("hello");
set.add("world");
console.log(set.has("hello"));//checks if the element is in the set
console.log(set.size)// prints the size of the set
console.log("|===========================================|")

const arr = [1,2,3];
arr.push(4)
console.log(arr);
console.log("|===========================================|")

// Functions
function addTwo(num=6) {
    return num + 2;
}

function callFunc(func, param){
    console.log(func(param));
}
console.log(addTwo());
callFunc(addTwo, 10);

console.log(typeof addTwo);
console.log("|===========================================|")

// For Loops

for (let i = 0; i < 4; i++) {
    console.log(i);
    if (i === 1){
        break
    }
}
console.log("|===========================================|")
// While Loop
let i = 0; 
while (i<4) {
    console.log(i);
    i++;
}
console.log("|===========================================|")

for (const value of "abc"){
    console.log(value)
}
console.log()
for (const value of "123"){
    console.log(value)
}
console.log()

const obj = {
    name: 'Biscuit',
    course: 'FrontendExpert'
};

for (const key in obj) {
    console.log(key, obj[key])
}
console.log()
// Conditionals

const condition = true;

if (condition) {
    console.log("It was true");
}   else if (condition === false){
    console.log("It was false");
}   else {
    console.log("Default")
}
console.log()

const myNum = 10;

console.log(myNum > 5 ? "Greater than 5" : "Less than 5")
console.log()

/* Multi Line
comment 
new lines
console.log("here")
*/
console.log("value");
console.log("error message");
console.log("Debug Message");
console.table([[1,2],['hello', 'world']])// for debugging something in a 2d array
console.count();
console.count();
console.countReset();
console.count('key');
console.time();
console.timeLog();
