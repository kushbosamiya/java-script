// basic console and user input 

console.log("kush bosamiya")

// comments
// my name is kush bosamiya

// user entered input 
// readline-sync is a package :which is 1st take the data from user and stored that data inside mentioned var.
var name = require("readline-sync");
var user = name.question("can i have your user name plse? :")

//  to print the entered name 
console.log("your user name :",user)
var pass = name.question("can plse enter your passcode :",{
    hideEchoBack:true
});
console.log("passcode:",pass)

// string concatenation in js

var x = name.question("can i have your name please ? ");
console.log("welcome "+x);
