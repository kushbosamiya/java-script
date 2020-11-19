// conditional statements 

// exercise-5

var id = require("readline-sync");

var username = id.question("are you older than 25 ?: ");
console.log("entered answer:"+username);
if (username=="yes") {
    console.log("congratulation,you are right!\n");
    
} else {
    console.log("oops,you are wrong!\n");   
}

exercise-6

score=1
var city = id.question("where are you from:");
console.log("you entered:"+city)
if (city=="rajkot") {
    console.log("i am also from that place");
    score=score + 1;
    console.log("your score is"+score);
    
} else {
    console.log("my relatives are also from that place")
    score = score - 2;
    console.log("your score is "+score);
}

exercise 6.1 (practice)
points=10;
var q = id.question("\nwhat is the defination of set?\n");
console.log("Answer:"+q);
if (q=="it is collection of well define objects") {
    console.log("congrats,you have win 1 million dollar check.");
    points=points+4;
    console.log("your points:"+points);

} else {

        console.log("oops, you have given wrong answer.");
        points=points-4;
        console.log("your points:"+points);

}


// exercise 6.2 (practice)
points=100;
var q = id.question("just tell me the name our national bird?\n");
console.log("Answer:"+q);
if (q=="peacock") {
    console.log("congrats,you are write");
    points=points+40;
    console.log("your points:"+points);

} else {

        console.log("oops, you have given wrong answer.");
        points=points-40;
        console.log("your points:"+points);

}

