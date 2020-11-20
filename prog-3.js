// functions -(syntax)
/*
1.
function x(arg1,arg2)
{
    body;
}
2.calling the above defined function
*/

//exercise-7 
function prod(x,y) {
    console.log("x:"+x,"y:"+y);
    var z=x*y;
    return z ;
}
var b = require("readline-sync");
var a1 = b.question("enter first no.:");
var a2 = b.question("enter second no.:");
var ans = prod(a1,a2) ;
console.log("product:"+ans);

// exercise -8
point = 0;
function qna(question,answer) {
    var q = b.question(question);
    if (q==answer) {
        console.log("congrats you are right");
        point=point+1;
    } else {
        console.log("oops! your are wrong.");
        point=point-1;
       
    }

}
qna("who is the prime minsiter of india?\n","narendra modi");
qna("what is the capital of india ?\n","delhi");
console.log("your points:"+point);


// exercise-8.1
// simple gk
cash=100;
function gk(question,answer) {
    var x = b.question(question);
    if (x==answer) {
        console.log("congrats! you are right.");
        cash=cash+50;
        
    } else {
        console.log("oops! you are wrong.");
        cash=cash-50;
        
        
    }   
}
gk("when did narendra modi beacame prime minsiter of india?\n","2014");
console.log("your points:"+cash);
gk("who is the ceo of apple ?\n","tim cook");
console.log("your points:"+cash);
gk("when did battle of jhansi was fought?\n","1857");
console.log("your points:"+cash);
