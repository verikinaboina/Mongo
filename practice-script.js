// passing an parameter to function as number
function jalaka(number) { 
    // var number = 200;
    console.log(`print the required ${number}`);
}

jalaka(200); // Passing an argument to a function


// scope

var value = 205;    // root scope

function calculate() {
    value = 250;     // child scope
    console.log(`print the ${value} value`);
}

calculate();  // printing the child scope value as calculate funtion executed

console.log(value); // printing root scope value

// ES6 features

// importing way changes from 

// Functions approache ES5 vs ES6
// ES5 with calling functions
function greetingsES5 (name) {
    return 'hello ' + name
   }

// ES6 with arrow funtions () =>
const greetingsES6 = name => `hello ${name}`;

// var objES5 = { a: 1, b: 2, c: 3, d: 4 }
// var a = objES5.a
// var b = objES5.b
// var c = objES5.c
// var d = objES5.d
// Time consuming 😕. Oh wait! we have ES6 here to rescue us.

// const objES6 = { a: 1, b: 2, c: 3, d: 4 }
// const { a, b, c, d } = obj

Exporting: 
// ES5
var myModuleES5 = { x: 1, y: function(){ console.log('This is ES5') }}
// module.exports = myModuleES5;

// Here is the ES6 implementation
// export default myModuleES6 = { x: 1, y: () => { console.log('This is ES5') }}


// Here is the ES5 version
// var myModule = require('./myModule');

// Here is the ES6 version
// import myModule from './myModule';
   
// import {x, y, z} from './myModule';
//Solve these problems:

// ES7 fetures:
 es7Obj = ['cat', 'dog', 'rat']
 es7Obj.includes('cat'); // it returns true, bcz it has the cat in the string;

 const square = (x) => x**4; // 2*2*2*2 4 times 'x'
 square(2); 

// ES8
'cam'.padStart(); // it will calculate the entire sting value and print '     cam'
'cam'.padEnd(); // it will calculate the entire sting value and print 'cam     '

// ES10
const arrayES10 = [1,2,3,[4,5]];
arrayES10.flat(); // It can print the all array as it is instead nested array. flat(param) param values will solve the complex of array values.

// ES10 flatmap
const flatArray = ['mint', 'apple', 'slat'];
const flatmapArr = flatArray.flatMap(item => item + 'mint' ) // it will fla the array and will return as adding the mint to all elements in this array.

console.log(flatmapArr);
// ES10 trim
trimEmail = "   reddy   @roi.com";
trim2Email = "reddy2@gmail.com  ";

const trimLog = trim2Email.trim()
console.log(trimLog);

// ES10 No need to use error block for catch block
try {

} catch {
    // no neer to use (error)
}

// ES2020
// BigInt;
// Optional chaining Operation (?)
const employee = {
    name: 'given name',
    empId: 123456,
    address: {
        addressLine1: '12234 new york dr',
        apt: 0
    },
    city: 'new york',
    zipcode: 01223
}

const empdetails = employee?. address?. addressLine1

console.log(empdetails);

// Nullish coaliscking Operation (??)
const nullishEmp = employee?.address?.apt ?? 'noAddress' // It returns '0' if use || it will return 'noAddress'.
console.log(nullishEmp);

// ES2021
const regString = 'string is to test ES 2020';
regString.replace('2020', '2021'); //have to be perform replaceAll
console.log(regString);

// string concat
const greetList = ['Hello', ' ', 'Venkat', '!'];
const concatStr = "".concat(...greetList + ' ' + 'redlabel')  // "Hello Venkat!"
console.log(concatStr);

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
const res = addToTen(3);

// Returns result 13, as addTo(10) = y => x=y and that means 10 => y => 10 = y and then addToTen(3) is 10 + 3 = 13.

// ForkJoin
// let obsArray: Observable<Object1 | Object2>[] = []; // Angular feture
// obsArray.push(myObject1);
// obsArray.push(myObject2);
// Observable.forkJoin(obsArray).subscribe(
//     responses => {console.log('both completed successfully!');},
//     error => {console.log('error');}
// );

// my closure function example:
const y = 10;
function a(x) {
    return x + y; // local
}
const result = a(10);
console.log(result);

//Currying: What does the last line return?
// normal function
const sum = (a, b) => a + b;
// curryin function()
const curriedSum = (a) =>
    (b) =>
        a + b;
curriedSum(30)(1); // passing args.

// Return result is 31


// //Composing: What does the last line return?
const compose = (f, g, h) => {
    return (x) =>{ 
        return f(g(h(x)));
    }
}
const add1 = (x) => x + 5; // 10 + 5
const add2 = (x) => x + 9; // 10 + 10 + 5
const add3 = (x) => x + 11; // 10 + 10 + 10 + 5

const composer = compose(add1, add2, add3)   // compose(f = add1, g= add2, h=add3) (x=10)

console.log(composer(10));

// What are the two elements of a pure function?
const updateMyName = (newName) => {
    const myNames = ["Oluwatobi", "Sofela"];
    myNames[myNames.length] = newName;
    return myNames;
}
console.log(updateMyName(3));


//Displaying aarray details in front end

const menuItems = ["Dal", "Chatnee", "Rice", "Biryani"];
// const menuCard = menu.current('hotelMenu')

for (let menu of menuItems) {
    console.log(`<li> ${menu}</li>`);
}

// a sample 2-D array 
 const arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (const i in arr) {
   for (const j in arr[i]) {
       console.log(` ${arr[i]}`);
   }
}


// forEach example:

const array = [65, 44, 12, 4];
const arr2 = [];
array.forEach(item => 
  arr2.push(item + 10)
)
console.log(arr2);

// Map 

const map = array.map((num) => {
    return num + 88;
})
console.log(map);

// Filter

const filter = array.filter((num) => {
    return num >= 5
})
console.log(filter);

const reduce = array.reduce((accumulator, num) => {
    return accumulator + num;
})

console.log(reduce)

// Adv Loops
// Loops: for(regular iterable loop), forEach(return each item in an array), forIn(for onjects in array), forOf(iterables in arrays)

// Excersize JS
const arrayEx = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// I want to create this [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]
// const arrExRes = [...new Set(arrayEx)]
//     .sort((a, b) => a - b)
//     .reduce((accumulator, next) => {
//         const filtered = arrayEx.filter(index => index === next);
//         return accumulator.push(filtered.length === 1 ? filtered[0] : filtered), 
//         accumulator 
//     },[]);

const arrExRes = [...new Set(arrayEx)]
    .sort((a, b) => a - b) // Sorting an array value
    .reduce((accumulator, num) => { 
        const filter = arrayEx.filter(index => index !== num); // filtering an array elements with index
        return accumulator.push(filter.length == -1 ? filter[0] : filter),
        accumulator
    }, []);

console.log(arrExRes);

const resArr = [
    {fName: "veera", lName: "buddi", age: 27},
    {fName: "Rami", lName: "kalava", age: 56},
    {fName: "keshav", lName: "maharaj", age: 21},
    {fName: "aadi", lName: "Reddy", age: 52},
    {fName: "venkata", lName: "chaudary", age: 21}
]

// map
const mapArr = resArr.map((map) =>  map.age * Math.PI );
console.log(mapArr);

// filter
const filArr = resArr.filter((fil) => {
    const filResult = fil.age > 27;
    filResult;
})

console.log(filArr);
// reduce to find age > 25

const redRes = resArr.reduce((acc, curr) => {
    if(curr.age >= 25){
        acc.push(curr.fName, curr.lName, curr.age),
        acc;
    }
    return acc;
}, []);

console.log(redRes)
