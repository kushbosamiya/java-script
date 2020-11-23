/* array and objects*/

// array syntax


var list =["x","y","z"];

var readlinesync=require("readline-sync");
var arr = ["k","u","s","h"];
console.log(arr[1]);//accessing array list through their index no.

var arrlength = arr.length ; //accessing array size through the .length function
console.log(arrlength);
var arrlength = arr.length - 1; //cross verify the char through index no.
console.log(arrlength);

// acccesing array through for loop and .length func.
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

// objects
var barbie = {
    name  : "barbie",
    color : "Pink",
    genre : "girls",
    speed : 10 ,
}
var bheem = {
    name :"bheem",
    color : "orange",
    genre : "boys",
    speed : 100 ,
}

console.log(bheem.speed);
console.log(barbie.genre);
