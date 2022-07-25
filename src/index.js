import readlineSync from 'readline-sync';

function commonLogic(functionGame, name){
  let count = 0;
  while(count < 3){
      let tempTask = functionGame();
      console.log(`Question: ${tempTask["question"]}`);
      let answer = readlineSync.question("Your answer: ");
      if(tempTask["answer"]==answer){
          console.log("Correct!");
          count++;
      } else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was ${tempTask["answer"]}`);
          console.log(`Let's try again ${name}`);
          break;
      }
  }
    if(count===3){
        console.log(`Congratulations, ${name}!`);
    }
}

export default commonLogic;
