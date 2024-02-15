// Datatype

let name = "anuj"       // String
let age = "28"              // Number
let mathNumber = 29.5            // Float
let isLoggedIn = true         // Boolean
let dataValue = null             // Standalone Value
let pocketMoney;                    // value is undefined

// Checking Boolean Datatype

//let myName = "";                      // Boolean(myName) Return false
//let myName = "Anuj";                  // Boolean(myName) Return true
//let myName = 0;                      // Boolean(myName) Return false
let myName = 1;                      // Boolean(myName) Return true
myName = Boolean(myname);              


// Checking String/ Number Datatype

let score = "anuj kumar";                 // Number(score) = Its return NAN (Not a number) value;
//let score = false;                      // Number(score) = Its return 0;
//let score = true;                      // Number(score) = Its return 1;
//let score = undefined;                // Number(score) = Its return NAN (Not a number) value;
//let score = null;                   // Number (Score) = Its Return 0 value 
//let score = "33";                  // Number(score) = Its return Number;
//let score = "33asc";               // Number(score) = Its return NAN (Not a number) value;


score = Number(score);                

console.log(typeof(score));
console.log(score);

