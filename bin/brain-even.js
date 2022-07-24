#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';
let name = askName();
function StartEvenGame(){
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".")
    let count = 0;
    for(let i = 0; i < 3; i++){
        let numb = Math.round(Math.random()*100);
        console.log(`Question: ${numb}`);
        const answer = readlineSync.question("Your answer: ");
        if((numb%2 === 0 && answer === "yes") || (numb%2 !== 0 && answer === "no")){
            console.log("Correct!");
            count++;
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was ${answer==="yes" ? "'no'" : "'yes'"}`);
            console.log(`Let's try again, ${name}!`)
            break;
        }
    }
    if(count===3){
        console.log(`Congratulations, ${name}!`);
    }
}

StartEvenGame();