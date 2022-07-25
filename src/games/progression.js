import askName from '../cli.js';
import commonLogic from "../index.js";

function randNumber(){
    return Math.round(Math.random()*100);
}

function randNumberProg(){
    return Math.round(Math.random()*10);
}

function countOfProgression(){
    return [5, 6, 7, 8, 9, 10, 11, 12, 13][Math.round(Math.random()*8)];
}

function brainProgression(){
  let diff = randNumberProg();
  let n = countOfProgression();
  let res = [];
  let first = randNumber();
  for (let i = 0; i<=n; i++){
      res.push(first);
      first+=diff;
  }
  let answer = Math.round(Math.random()*n);
  let res1 = res[answer];
  res[answer] = '..';
  return {"question": res.join(", "),
  "answer": res1};
}

function resProg() {
    let name = askName();
    commonLogic(brainProgression, name);
}
export default resProg();