const chalk = require('chalk');
var readlinesync = require('readline-sync');

/*greetings*/
console.log(chalk.bold.italic.magentaBright.underline("Welcome to Instagram\n"));
console.log(chalk.greenBright.italic('Namaste.. from instagram team'));

/* username and passcode*/
readlinesync.question(chalk.magentaBright.italic('Username:'));
var x=readlinesync.question(chalk.magentaBright.italic('Passcode:'), 
{
    hideEchoBack: true 
});
console.log(chalk.magentaBright.italic("Entered Passcode:")+x);
// console.log('\n');


/*function and conditions*/
function services(question,resolution) 
{
    // console.log("question:"+question,"resolution:"+resolution);
    var y = readlinesync.question(question);
 
    if (y===resolution) {
        readlinesync.question(chalk.italic.greenBright("\nCan yo please describe your problem breifly?\n") );
       
        console.log(chalk.white.bold("Okay,so we have put your problem on our daily basis\nwe definatly sure that within 45 minutes this problem is resolve."));
        
    } else {
        console.log(chalk.red.bold("Sorry this type of problem,we can't resolve this is against to our policy.\n"));
        var c=readlinesync.question(chalk.greenBright.italic('Would like to rate us ?(yes/no)'));
        if (c=="yes") {
            var r= readlinesync.question(chalk.greenBright.italic("just please rate out of 10 points\n"));
            for(x=1;x<= 10;x++)
            {
                console.log(x); // so the rating system is not working .
            }
            
        } else {
            console.log(chalk.white.bold("Okay,its fine if you don't want to rate."));
        }
    }
}
/*calling of function services*/
services(chalk.italic.greenBright("Do you facing problems with Instagram application?(yes/no)\n"),"yes" ) ;
console.log(chalk.greenBright.italic("Can you please list out your problems?(yes/no)"));


var prb = ["laaging","hangback","straggle","dull"] ;
for (let i = 0; i < prb.length; i++)
{
    console.log(chalk.blue.italic(prb[i]));
    
}
console.log(chalk.bold.white("\nFor "+prb[0],"our team has already working on it."));

var l=readlinesync.question(chalk.greenBright.italic("Can you please tell us pros and cons of app?(yes/no)"))
if(l=="yes")
{
    var pros =
    {
        ui:"excellent",
        support:"good",
        features:"best",
        control:"best"
    }
    var cons =
    {
        addictive:"yes",
        DND:"not providing do not disturb services",
        editting:"not so much good"
    }
    console.log("Pros:",pros);
    console.log("Cons:",cons);
  
    console.log(chalk.italic.greenBright("Tell us the worst cons:"+cons.DND));
    
    console.log(chalk.italic.greenBright("Tell us the best pros:"+pros.ui));
   
}
else
{
    console.log(chalk.white.bold(("Thank you...")));
}


