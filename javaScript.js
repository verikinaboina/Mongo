// JavaScript concepts

let arrList = [
    'What is javaScript and how it works: Single threaded in one stack',
    'How the code executes: memory and code',
    'Hoisting',
    'Lexical scoping && Scope chain',
    'Var vs Let vs const in JS',
    ' Block scope || Shodowing',
    ' Closure {}',
    'eventLoop && callback queue',
    'temporal literal `` ',
    'forEach(), map(), filter() and reduce()',
    'call(), apply(), bind(), next(), then() and async/await'
];
let scriptList = document.getElementById("jsTopic");

arrList.forEach(element => {
    let listOfItems = document.createElement('li');
    listOfItems.innerText = element;
    scriptList.appendChild(listOfItems);
});


// Hoisting: 
// Desc: hosting can move the function declaration to u even after yodeclate the values.


// console.log(a1); // it doesnt return undefined as intilization happend after this as var is defined
// else it will be not intialized error.
var a1 = 2;

const arrFun = (a1, b1) => a1 + b1;     // it will return undefined as JS wont take this arrow funtion to the top

console.log(`print the ${func(4, 5)}`)
console.log(`print the ${arrFun(4, 5)}`)

function func(a2, b2) {               // javascript moves this to the top and execute (invoke)
    return a2 + b2;
}

//Lexical scoping && scope chain:

const name = 'Scott'; // Global scope
const age = '25'; // Age is present here so, this will call by age() inside of name() which parent lexical to age().

function empName() {
    console.log(name); // Local scope
    function empAge() {    // When age function runs, it will look for age value in local memory, if isn't present look in parent lexical memory.
        console.log(age);
    }
    const eAge = empAge();
    console.log(eAge);
}
const eName = empName();
// console.log(eName);

// Var vs Let vs const in JS

// tomporal dead zone
// console.log(a3); // a is undefined
console.log(b3); // gives a error before initialization error.

// console.log(x); // // x is not defined.

let a3 = 10;         // This one will give a reference error saying: a is undefined
var b3 = 10;
const c3 = 10;
console.log(c3); //It will return a value

// Block scope || Shodowing

var a4 = 100; // This wills tore in global scope
let b4 = 200; // This will store in 'script' block
let d4 = 300; // // This will store in 'script' block
{
    var a4 = 10; // This wills tore in global scope
    let b4 = 20; // This wills tore in block scope
    const c4 = 30; // This wills tore in block scope

    console.log(a4);
    console.log(b4);
    console.log(c4);
    var d = 40; // This shadowing is not allowed as it is already declared in script block with let. (illegal)

}

console.log(a4); // it will print a = 10; it is shadowing the 'a' from next declaratioin. (Shadowing).
console.log(b4); // it will print b =200 as it will read from 'script' scope. 

// Closure {}

const blbVal = 200; // global scope declaration

function closure() { // A function where it is has lexical scope bundled together forms a closure.
    let cls = 10;
    function lex() { // lexical scope
        console.log(cls);
        console.log(blbVal);
    }
    lex();
}
closure();

// New example:

function newFun() {
    const newVal = 1.2200;
    function newLex() {
        console.log(newVal);
    }
    newLex();
}
newFun();

// setTimeout

function setTime() {
    var sm = 700;
    setTimeout(function () {
        console.log(sm);
    }, 4000)
}
setTime();

// Callback functions
// Pure functions


/* abc(); */ // If this is called this can return something as 'hoisting comes into the picture' and incoke it.
/* bcd(); */  // will be fail it is assigned to a variable it will treat as a variable and will say it is undefined. bcd is not a function)

// Function statement && Function declaration
function abc() {
    console.log('abc is called');
}
abc();

// Exprression vs 
const bcd = function cde() {
    console.log('bcd called');
}
bcd();

// Annonymus function
/ * function () {} * / // we call this one as an Annonymus function

// Named funciton expression

/* var nFuc = function xyz() {} */ // Here we have named the function and gave expression as well 
// but it can take the as variable declaration.

// args and funcs
function sumOf(one, two) { sum = one + two; return sum; } // here one, two are the params
const sumOfTwo = sumOf(4, 30);                  // 4, 30 are the args to one, two.                  
console.log(sumOfTwo);

// First class functions

// It has the feature that we can call it as 
// 1. we can assign to a variable
var firstFunc = function (func) {
    return func + 2;
}
console.log(firstFunc(2));

// 2. function we can call it as a arg to another functions
/*** This is also known as call back function ***/
const Hey = () => "Hello";

const parFun = (printName, arg) => {
    return printName() + " " + arg;
}
const greetKallu = parFun(heyHello, "kallu");
console.log(greetKallu);

function heyHello() {
    return "Here I'm!"
}

// 3. returns the other function inside the function

const parent = numFun => {
    return add => {
        return numFun * add;
    }
};
const resFirst = parent(1200);
console.log(resFirst(200));

// Call back functions ** imporantant
// Functions are first class citizens

function myDisplayer(something) {
    console.log(`The value of calucalulator is ${something}`)
}
function myCalculator(num1, num2, myCallback) {
    const addition = num1 + num2;
    myCallback(addition);
}
myCalculator(5, 5, myDisplayer);

// Another example of callback

function newCb(result) {
    console.log(`The result of ${result}`);
}
function addtwo(first, callback) {
    const total = first + 1;
    callback(total);
}
addtwo(8, newCb);

// Another with call back
function addMore(addit) {
    console.log(`addmore TO ${addit}`)
}

function addThis(more, result) {
    const addingTwo = more++;
    result(addingTwo);
};
console.log(addThis(232, addMore));

// callback with setTimeout
const latestCB = (resCome) => {
    setTimeout(function cb() {
        ready = 100;
        console.log('This is the call back function' + resCome + ' ' + ready);
    }, 5000)
}
console.log(latestCB(300))
// forEach with setTimeout
const cbArr = ['items', 'things', 'buildings', 'roads'];

const stFE = cbArr.forEach((cbItem) => {
    setTimeout(() => {
        console.log(cbItem[0] + cbItem[1] + cbItem[2] + cbItem[3]);
    }, 3000)
})
console.log(`for each is old one: ${stFE}`)
//Web Api's list

/***
 * setTimeout()     // set time will hold the execution of the function this the time expires
 * DOM API's        // Dom loads the elements of the each one defined in the templte file
 * fetch()          // fetch the data and stores in loc/ses storage
 * local storage    // pending
 * console          // Done
 * location         // Pending
 **/

//call back with event listener (DOM API's)

/** 
 * 1. callback() is registered in webAPI (window)
 * 2. once we clicked it will pushed to the callback queue
 * 3. event loop( gateway), it will push into the call stack
 **/

/** 
 * Event loop working process:
 * There are two types to be excuted: 
 * 1. micro task queue (Returns promises and observables) 2. call back queue (it will have cal backs in queue)
 * it will take micro task as a priority to be executed once it is ready with data
**/

console.log("Start"); // This will print first

const bclick = document.getElementById('clickme');

if (bclick) {
    bclick.addEventListener('click', () => {
        if (confirm("changes are successfully updated")) {       // confirm is 'ok' or 'cancel'
            console.log('successfully changed');
        } else {
            console.log('no changes are made');
        }
    })
};

console.log("Done"); // this will print second

// Higher order function (functinal programing)

console.log("url: ${https://www.youtube.com/watch?v=R8rmfD9Y5-c&ab_channel=WebDevSimplified }");
// map, forEach, some, every, reduce, filter

const radiusArr = [4, 2];

// find area 
const area = (radius) => Math.PI * (radius * radius);
console.log(radiusArr.map(area));

// circufence 2πr
const circufence = item => 2 * Math.PI * item;
console.log(radiusArr.map(circufence));

// Diameter 
const diameter = item => 2 * item;
console.log(radiusArr.map(diameter));

// sqrt
const unitArray = [25, 36, 49];
const sqrt = item => Math.sqrt(item);
const roots = unitArray.map(sqrt);

console.log(roots);

// New example for higher order functions
const selectArray = [
    { name: 'bob', age: 30, city: 'San francisco' },
    { name: 'matt', age: 41, city: 'San diago' },
    { name: 'henry', age: 38, city: 'San francisco' },
    { name: 'ken', age: 25, city: 'San roman' }
]

// .map will do?
/** map() is act like a reguar for loop, it iterates and show the value */

const mapArr = selectArray.map(item => item.name + ' ' + item.age + ' ' + item.city);
console.log('array object print',mapArr);

// filter()
/** it actually filters the values what we want with a condition */

const filterArr = selectArray.filter(item => item.name == 'ken');
const filterArrAge = selectArray.filter(item => item.age >= 27);

console.log(filterArr);
console.log(filterArrAge);

// forEach()
const thisResult = [];
selectArray.forEach((item, index) => {
    thisResult.push(`this employee id ${index * 1133 + 1} is belongs to ${item.name}`);
})
console.log(thisResult);

const wfhEmp = (item, index) => {
    console.log(`${[index + 1]} ${item.name} working from ${item.city}`);
}
selectArray.forEach(wfhEmp);

// more with forEach()
const items = [
    { name: 'item1', act: 'dance' },
    { name: 'item2', act: 'sing' },
    { name: 'item3', act: 'art' }
];

const copy = [];
items.forEach(function (item, index) {
    copy.push(`it will print ${[index]} and ${item.name} and ${item.act} too`);
});
console.log(copy);

// Reduce()
const reduceThis = selectArray.reduce((accumlator, current) => {
    accumlator = current.age + accumlator;
    return accumlator;
}, 0);

console.log(reduceThis);

//Another with reduce
const arrayjs = [15, 16, 17, 18, 19];

const reducer = (accumulator, currentValue, index) => {
    const returns = accumulator + currentValue;
    console.log(
        `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
    );
    return returns;
}

arrayjs.reduce(reducer);

// sort() // pending

//higher order function
/** A function can take another function as an argument or return a function */

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);

const org = (param) => {
    return (...args) => {
        console.log('Arg list');
        let minVal = param(...args);
        console.log(`the min of the given list is ${minVal}`);
        return minVal;
    }
}
noisy(Math.max)(3, 5, 33, 999, 2.5, 9999.3);

// call() // This we called 'function' barrowing in javscript

const empDetails = {
    firstname: 'kalyani',
    lastname: 'kallu'
}
const printEmpDetails = function (address, state) {
    return `This table has the details with ${this.firstname}, ${this.lastname} and ${address} in ${state}`;
};
const edt = printEmpDetails.call(empDetails, 'Noida', 'MP')
console.log(edt);

// apply ()
const edtApply = printEmpDetails.apply(empDetails, ['Mumbai', 'MP'])
console.log(edtApply);

// Apply() One more example
const numArray = [12, 34, 44, 56, 13, 8];
const retMaxnum = Math.max.apply(Math, numArray);
console.log(retMaxnum);

// bind(), will act as a call but you have to invoke it searately.
const edtBind = printEmpDetails.bind(empDetails, 'Hyderabad', 'TG');
console.log(edtBind());
edtBind();

/** 
 * async and await overcoming the .then()
 */

// then() //example:
const thenData = () => {
    try {
        const url = 'https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';
        fetch(url)
            .then((res) => res.json())
            .then((data) => console.log(data))
    } catch (err) {
        console.log(error)
    }
}
thenData();

// async and await
const fetchData = async () => {
    try {
        const asyncUrl = `https://dummyjson.com/products/12`;
        const res = await fetch(asyncUrl);
        console.log(res.status); // 200: success
        const data = await res.json();
        console.log(data);
    } catch (err) { // 404
        console.log(err.res);
    }
}

fetchData();