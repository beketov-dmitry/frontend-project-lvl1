import askName from '../cli.js';
import commonLogic from '../index.js';

function randNumber() {
  return Math.round(Math.random() * 100);
}

function brainNod() {
  let numb1 = randNumber();
  let numb2 = randNumber();
  const question = `${numb1} ${numb2}`;
  while (numb1 && numb2) { numb1 > numb2 ? numb1 %= numb2 : numb2 %= numb1; }
  numb1 += numb2;
  return {
    question,
    answer: `${numb1}`,
  };
}

function resNod() {
  const name = askName();
  commonLogic(brainNod, name);
}
export default resNod;
