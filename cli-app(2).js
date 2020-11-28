var readlineSync = require("readline-sync");
const chalk =require('chalk');

// personal 
console.log(chalk.bold.underline.greenBright("\nWelcome to KBC for Childrens"));//green,cyan,white
readlineSync.question(chalk.cyanBright('\nName:'));
readlineSync.question(chalk.cyanBright('Where are you from:'));
readlineSync.question(chalk.cyanBright('Class:'));

// instructions
console.log(chalk.bold.underline.greenBright('\nInstructions Of KBC\n'));
console.log(chalk.bold.whiteBright('- KBC contain 4 levels,each level have 4 questions.'));
console.log(chalk.bold.whiteBright('- If you had given ant wrong Answers of particular question,you will gone out of this game.\n'));

// defining score
score=0;

// function -0


     console.log(chalk.bold.underline.greenBright('LEVEL 1\n'));
    

    // //question-1 
    console.log(chalk.yellowBright('So, lets move to our 1st question.\n'));
    var x= ['jawaharlal nehru','Goverdhan Lal Arya','Sardar Vallabhbhai Patel','Mohandas Karamchand Gandhi']
    var x2 = readlineSync.keyInSelect(x,'Who is the Father of our Nation?\n',
    {
        cancel:false 
    });
    if (x[x2]==x[3]) 
    {
        console.log(chalk.whiteBright.bold('Congrats! "'+x[3],'"its a right answer'));
        score=score+25;
        console.log(chalk.blueBright('score='+score));
        console.log(chalk.yellowBright('\nNow we will move to the next which is 2nd question.\n'));
        
        // kbc('Who is the Father of our Nation?\n','answer');
// kbc1('question1','answer1');
// kbc2('question2','answer2');
// kbc3('question3','answer3');
        
    //     //question-2 
     var y= ['skin','lips','chiks','eyes']
     var y2 = readlineSync.keyInSelect(y,'Which is the most sensitive organ in our body?\n',
     {
         cancel:false 
     });
     if (y[y2]==y[0]) 
     {
         console.log(chalk.whiteBright.bold('Congrats! "'+y[0],'"its a right answer'));
         score=score+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.yellowBright('\nNow we will move to the next which is 3rd question.\n')); 
        
        
    //  question-3   
     var z= ['Africa','Europe','Asia','Antarctica']
     var z2 = readlineSync.keyInSelect(z,'India lies in which continent?\n',
     {
         cancel:false 
     });
     if (z[z2]==z[2]) 
     {
         console.log(chalk.bold.whiteBright('Congrats! "'+z[2],'"its a right answer'));
         score=score+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.yellowBright('\nNow we will move to the next which is 4th question.\n')); 
         
             //  question-4   
     var s= ['Japan','France','Egypt','Brazil']
     var s2 = readlineSync.keyInSelect(s,'Which country are the Giza Pyramids in?\n',
     {
         cancel:false 
     });
     if (s[s2]==s[2]) 
     {
         console.log(chalk.bold.whiteBright('Congrats! "'+s[2],'"its a right answer'));
         score=score+25;
         console.log(chalk.blueBright('score='+score));
     } 
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+s[2]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }               
     } 
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+z[2]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }               
     }
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+y[0]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }    
         
    }
 
    else {
        console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+x[4]));
        score=score-25+25;
        console.log(chalk.blueBright('score='+score));
        console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
        process.exit
    }
     
    




    if (score==100)
    {
        console.log(chalk.bold.underline.greenBright('\nLEVEL 2\n'));
    

    //question-1 
    console.log(chalk.yellowBright('So, lets move to our 5th question .\n'));
    var a= ['Amazon river','Nile river','missisippi river','Ganga river']
    var a2 = readlineSync.keyInSelect(a,'Which is the longest river on the earth?\n',
    {
        cancel:false 
    });
    if (a[a2]==a[1]) 
    {
        console.log(chalk.bold.whiteBright('Congrats! "'+a[1],'"its a right answer'));
        score=score+50;
        console.log(chalk.blueBright('score='+score));
        console.log(chalk.yellowBright('\nNow we will move to the next which is 6th question.\n'));
        
        
        
        //question-2 
     var b= ['California','Los Angeles','Rome','New York City']
     var b2 = readlineSync.keyInSelect(b,'In which city the statue of liberty is?\n',
     {
         cancel:false 
     });
     if (b[b2]==b[3]) 
     {
         console.log(chalk.bold.whiteBright('Congrats! "'+b[3],'"its a right answer'));
         score=score+50;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.yellowBright('\nNow we will move to the next which is 7th question.\n')); 
        
        
    //  question-3   
     var c= ['Tehri Dam','Sardar sarovar Dam','Bhakhra nangal Dam','Aji Dam']
     var c2 = readlineSync.keyInSelect(c,'Highest dam of India is?\n',
     {
         cancel:false 
     });
     if (c[c2]==c[0]) 
     {
         console.log(chalk.whiteBright.bold('Congrats! "'+c[0],'"its a right answer'));
         score=score+50;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.yellowBright('\nNow we will move to the next which is 8th question.\n')); 
         
             //  question-4   
     var d= ['Aurbindonath Tagore','Ravindranath Tagore','Gulzar','Bankeemchandra chattopadhyay']
     var d2 = readlineSync.keyInSelect(d,'Who wrote the National Anthem - Jana Gana Mana?\n',
     {
         cancel:false 
     });
     if (d[d2]==d[1]) 
     {
         console.log(chalk.whiteBright.bold('Congrats! "'+d[1],'"its a right answer'));
         score=score+50;
         console.log(chalk.blueBright('score='+score));
     } 
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+d[1]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }               
     } 
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+c[0]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }               
     }
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+b[3]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }    
         
    }
 
    else {
        console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+a[0]));
        score=score-25+25;
        console.log(chalk.blueBright('score='+score));
        console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
        process.exit
    }
    } else 
    {
     console.log(chalk.red('\nOops! you had not complete LEVEL 1 '));    
    }

    if (score==300)
    {
        console.log(chalk.bold.underline.greenBright('\nLEVEL 3\n'));
    

    //question-1 
    console.log(chalk.yellowBright('So, lets move to our 9th question .\n'));
    var k= ['Calcium','Zinc','Iodine','Glucose']
    var k2 = readlineSync.keyInSelect(k,' Goitre is caused due to the deficiency of?\n',
    {
        cancel:false 
    });
    if (k[k2]==k[2]) 
    {
        console.log(chalk.whiteBright.bold('Congrats! "'+k[2],'"its a right answer'));
        score=score+75;
        console.log(chalk.blueBright('score='+score));
        console.log(chalk.yellowBright('\nNow we will move to the next which is 10th question.\n'));
        
        
        
        //question-2 
     var l= ['Perimetre','Area','Radius','Diametre']
     var l2 = readlineSync.keyInSelect(l,'The total distance around a figure is called its?\n',
     {
         cancel:false 
     });
     if (l[l2]==l[0]) 
     {
         console.log(chalk.bold.whiteBright('Congrats! "'+l[0],'"its a right answer'));
         score=score+75;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.yellowBright('\nNow we will move to the next which is 11th question.\n')); 
        
        
    //  question-3   
     var m= ['sundarban','The Jungles of Borneo','Corbett National Park','Amazon']
     var m2 = readlineSync.keyInSelect(m,'Which jungle is the most dense in the world?\n',
     {
         cancel:false 
     });
     if (m[m2]==m[3]) 
     {
         console.log(chalk.whiteBright.bold('Congrats! "'+m[3],'"its a right answer'));
         score=score+75;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.yellowBright('\nNow we will move to the next which is 12th question.\n')); 
         
             //  question-4   
     var n= ['105°','100°','108°','185°']
     var n2 = readlineSync.keyInSelect(n,'What is the boiling point of water?\n',
     {
         cancel:false 
     });
     if (n[n2]==n[1]) 
     {
         console.log(chalk.bold.whiteBright('Congrats! "'+n[1],'"its a right answer'));
         score=score+75;
         console.log(chalk.blueBright('score='+score));
     } 
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+n[1]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }               
     } 
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+m[3]));
         score=score-25+25;
         console.log(chalk.redBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }               
     }
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+l[0]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }    
         
    }
 
    else {
        console.log(chalk.red('Oops ! unfortunately you had given wrong answer\nRight answer is '+k[2]));
        score=score-25+25;
        console.log(chalk.blueBright('score='+score));
        console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
        process.exit
    }
    } 
    else {
        console.log(chalk.redBright('\nOops! you had not complete LEVEL 2 ')); 
    }

    

    if (score==600) 
    {
        console.log(chalk.bold.underline.greenBright('\nLEVEL 4\n'));
        console.log(chalk.yellowBright('So, lets move to our 13th question .'));
    var o= ['Sulfuric Acid','fatty acid','Hydro chloric Acid','Citric Acid']
    var o2 = readlineSync.keyInSelect(o,'Which acid is found in lemon?\n',
    {
        cancel:false 
    });
    if (o[o2]==o[3]) 
    {
        console.log(chalk.bold.whiteBright('Congrats! "'+0[3],'"its a right answer'));
        score=score+100;
        console.log(chalk.blueBright('score='+score));
        console.log(chalk.yellowBright('\nNow we will move to the next which is 14th question.\n'));
        
        
        
        //question-2 
     var p= ['Thomas edison','Albert Einstien','Galelieo','Newton']
     var p2 = readlineSync.keyInSelect(p,'Who was the inventor of the light bulb?\n',
     {
         cancel:false 
     });
     if (p[p2]==p[0]) 
     {
         console.log(chalk.bold.whiteBright('Congrats! "'+p[0],'"its a right answer'));
         score=score+100;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.yellowBright('\nNow we will move to the next which is 15th question.\n')); 
        
        
    //  question-3   
     var q= ['Punjab','Kerala','Bihar','Jharkhand']
     var q2 = readlineSync.keyInSelect(q,'‘Madhubani’, a style of folk paintings, is popular in which of the following states in India?\n',
     {
         cancel:false 
     });
     if (q[q2]==q[2]) 
     {
         console.log(chalk.whiteBright.bold('Congrats! "'+q[2],'"its a right answer'));
         score=score+100;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.yellowBright('\nNow we will move to the next which is 16th question.\n')); 
         
             //  question-4   
     var r= ['Law 1','Law 2','Law 3','All of the Above']
     var r2 = readlineSync.keyInSelect(r,'Which law of Newton says that an object in motion will stay in motion unless another forces changes that?\n',
     {
         cancel:false 
     });
     if (r[r2]==r[0]) 
     {
         console.log(chalk.bold.whiteBright('Congrats! "'+r[0],'"its a right answer'));
         score=score+100;
         console.log(chalk.blueBright('score='+score));
     } 
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+r[0]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }               
     } 
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+q[2]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }               
     }
     
     else {
         console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+p[0]));
         score=score-25+25;
         console.log(chalk.blueBright('score='+score));
         console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
         process.exit
     }    
         
    }
 
    else {
        console.log(chalk.red('\nOops ! unfortunately you had given wrong answer\nRight answer is '+o[3]));
        score=score-25+25;
        console.log(chalk.blueBright('score='+score));
        console.log(chalk.redBright('\nDue to this your journey will stop here ,Better Luck Next Time!'));
        process.exit
    }

        
    }
    else 
    {
        console.log(chalk.redBright('\nOops! you had not complete LEVEL 3 '));
        
    }

console.log('\nThank You');


